
export const GET_ROOT_COMMENTS = 'GET_ROOT_COMMENTS';
export const WAITING_ROOT_COMMENTS = 'WAITING_ROOT_COMMENTS';
// export const SET_ROOT_COMMENTS_ENDED = 'SET_ROOT_COMMENTS_ENDED';
// export const CLEAR_ROOT_COMMENTS = 'CLEAR_ROOT_COMMENTS';

export const getRootCommentsAction = (comments: Array<CommentType>) => (
    {
        type: GET_ROOT_COMMENTS,
        comments: comments
    }
);

export const waitingRootCommentsAction = () => (
    { type: WAITING_ROOT_COMMENTS }
);

// export const setRootCommentEndedAction = () => (
//     { type: SET_ROOT_COMMENTS_ENDED }
// );

// export const clearRootCommentsAction = () => (
//     { type: CLEAR_ROOT_COMMENTS }
// )