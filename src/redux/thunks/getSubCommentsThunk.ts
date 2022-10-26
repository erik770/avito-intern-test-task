

import { GetComment } from "../../API/fetchComments";
import { emptyComment } from "../../consts/consts";
import { CommentType } from "../../types";
import { getSubCommentsAction, waitingSubCommentsAction } from "../actions/SubCommentsActions";


const SubCommnets: Map<number,CommentType[]> = new Map();

export const getSubCommentsThunk = (subCommentsIds: number[] = [], rootCommentId: number = 0, fullUpdate = false) => (async (dispatch: any) => {
    dispatch(waitingSubCommentsAction());
    // !subCommentsIds.length && dispatch(getSubCommentsAction([]));
    
    let subComment: CommentType = emptyComment;
    SubCommnets.set(rootCommentId, []);
    const arr = [];
    for (let i = 0; i < subCommentsIds.length; i++) {
        subComment = await GetComment(subCommentsIds[i]).then(responce => {
            return {
                id: responce.id,
                author: responce.by,
                text: responce.text,
                subComments: responce.kids ? responce.kids : [],
            }
        }).catch((error => {
            return emptyComment;
        }));
        arr.push(subComment);
    }
    SubCommnets.set(rootCommentId, arr);
    dispatch(getSubCommentsAction(SubCommnets));
    // async function DeepSearch(comments: Array<number> = subCommentsIds, backarray: Array<SubCommentType> = [], level: number = 0) {
    //     let Info = backarray;
    //     let levelCurrent = level;
    //     levelCurrent++;
    //     for (let i = 0; i < comments.length; i++) {
    //         subComment = await GetComment(comments[i]).then(responce => {
    //             return {
    //                 level: levelCurrent,
    //                 id: responce.id,
    //                 author: responce.by,
    //                 text: responce.text,
    //                 subCommentsIds: responce.subCommentsIds ? responce.subCommentsIds : 0,
    //                 deleted: responce.deleted ? true : false
    //             }
    //         })
    //         if (subComment.subCommentsIds.length > 0) {
    //             Info.push(subComment);
    //             await DeepSearch(subComment.subCommentsIds, Info, levelCurrent);
    //         }
    //         else {
    //             Info.push(subComment);
    //         }
    //     }
    //     return Info;
    // }

    // if (fullUpdate) {
    //     SubCommnets.clear();
    // } else {
    //     dispatch(waitingSubCommentsAction());
    //     DeepSearch().then(responce => {
    //         SubCommnets.set(rootCommentId, responce);
    //         dispatch(getSubCommentsAction(SubCommnets));
    //     });
    // }

});
export {}