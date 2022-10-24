// import { RootCommentType } from '../../types/types';
// import {
//     GET_ROOT_COMMENTS, WAITING_ROOT_COMMENTS,
//     SET_ROOT_COMMENTS_ENDED, CLEAR_ROOT_COMMENTS
// } from '../actions/GetRootCommentsAction';

// const initialState = {
//     comments: [] as Array<RootCommentType>,
//     isFetching: false,
//     isLastComment: false
// }

// const GetRootCommentReducer = (state = initialState, action: any) => {
//     switch (action.type) {
//         case GET_ROOT_COMMENTS:
//             return {
//                 ...state,
//                 comments: action.comments,
//                 isFetching: false
//             }
//         case WAITING_ROOT_COMMENTS:
//             return {
//                 ...state,
//                 isFetching: true,
//             }
//         case SET_ROOT_COMMENTS_ENDED:
//             return {
//                 ...state,
//                 isLastComment: true,
//             }
//         case CLEAR_ROOT_COMMENTS:
//             return {
//                 ...state,
//                 comments: [],
//                 isLastComment: false,
//             }
//         default:
//             return state
//     }
// }

// export default GetRootCommentReducer;
export {}