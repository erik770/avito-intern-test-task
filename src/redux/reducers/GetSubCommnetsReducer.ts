// import { SubCommentType } from '../../types/types';
// import {
//     GET_SUB_COMMENTS, WAITING_SUB_COMMENTS,
//     CLEAR_SUB_COMMENTS
// } from '../actions/GetSubCommentsAction';

// const initialState = {
//     subComments: new Map() as Map<number, Array<SubCommentType>>,
//     isFetching: false,
// }

// const GetSubCommentReducer = (state = initialState, action: any) => {
//     switch (action.type) {
//         case GET_SUB_COMMENTS:
//             return {
//                 ...state,
//                 subComments: action.subComments,
//                 isFetching: false
//             }
//         case WAITING_SUB_COMMENTS:
//             return {
//                 ...state,
//                 isFetching: true,
//             }
//         case CLEAR_SUB_COMMENTS:
//             return {
//                 ...state,
//                 subComments: new Map(),
//             }
//         default:
//             return state
//     }
// }

// export default GetSubCommentReducer;
export {}