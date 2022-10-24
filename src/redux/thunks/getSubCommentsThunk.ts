// import { GetComment } from '../../API/getCommnet';
// import { getSubCommentsAction, waitingSubCommentsAction } from '../actions/GetSubCommentsAction';
// import { SubCommentType } from '../../types/types';


// const SubCommnets: Map<number, Array<SubCommentType>> = new Map();

// export const getSubCommentsThunk = (kids: Array<number> = [], rootCommentId: number = 0, fullUpdate = false) => (async (dispatch: any) => {

//     let subComment: SubCommentType = {
//         level: 0,
//         id: 0,
//         author: '',
//         text: '',
//         kids: [],
//         deleted: false
//     };

//     async function DeepSearch(comments: Array<number> = kids, backarray: Array<SubCommentType> = [], level: number = 0) {
//         let Info = backarray;
//         let levelCurrent = level;
//         levelCurrent++;
//         for (let i = 0; i < comments.length; i++) {
//             subComment = await GetComment(comments[i]).then(responce => {
//                 return {
//                     level: levelCurrent,
//                     id: responce.id,
//                     author: responce.by,
//                     text: responce.text,
//                     kids: responce.kids ? responce.kids : 0,
//                     deleted: responce.deleted ? true : false
//                 }
//             })
//             if (subComment.kids.length > 0) {
//                 Info.push(subComment);
//                 await DeepSearch(subComment.kids, Info, levelCurrent);
//             }
//             else {
//                 Info.push(subComment);
//             }
//         }
//         return Info;
//     }

//     if (fullUpdate) {
//         SubCommnets.clear();
//     } else {
//         dispatch(waitingSubCommentsAction());
//         DeepSearch().then(responce => {
//             SubCommnets.set(rootCommentId, responce);
//             dispatch(getSubCommentsAction(SubCommnets));
//         });
//     }

// });
export {}