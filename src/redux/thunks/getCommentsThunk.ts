import { GetComment } from "../../API/fetchComments";
import { emptyComment } from "../../consts/consts";
import { CommentType } from "../../types";
import { getCommentsAction, waitingCommentsAction } from "../actions/CommentsActions";


export const getRootCommentsThunk = (commentsIds: Array<number> = []) => (async (dispatch: any) => {
    const comments: CommentType[] = [];
    dispatch(getCommentsAction([]));
    dispatch(waitingCommentsAction());

    let singleComment: CommentType = emptyComment;

    for (let i = 0; i < commentsIds.length; i++) {
        singleComment = await GetComment(commentsIds[i]).then(responce => {
            return {
                id: responce.id,
                author: responce.by,
                text: responce.text,
                subComments: responce.kids ? responce.kids : [],
            }
        }).catch((error => {
            return emptyComment;
        }));
        comments.push(singleComment);
    }
    dispatch(getCommentsAction(comments));
})
