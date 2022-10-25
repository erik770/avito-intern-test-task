import { CommentType } from "../../types";

export const GET_COMMENTS = 'GET_COMMENTS';
export const WAITING_COMMENTS = 'WAITING_COMMENTS';
// export const SET_ROOT_COMMENTS_ENDED = 'SET_ROOT_COMMENTS_ENDED';
// export const CLEAR_ROOT_COMMENTS = 'CLEAR_ROOT_COMMENTS';

export const getCommentsAction = (comments: CommentType[]) => (
    {
        type: GET_COMMENTS,
        comments: comments,
    }
);

export const waitingCommentsAction = () => (
    {
        type: WAITING_COMMENTS,
    }
);

// export const setRootCommentEndedAction = () => (
//     { type: SET_ROOT_COMMENTS_ENDED }
// );

// export const clearRootCommentsAction = () => (
//     { type: CLEAR_ROOT_COMMENTS }
// )