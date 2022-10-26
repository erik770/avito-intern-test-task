import { CommentType } from "../../types";

export const GET_SUB_COMMENTS = "GET_SUB_COMMENTS";
export const WAITING_SUB_COMMENTS = "WAITING_SUB_COMMENTS";
export const CLEAR_SUB_COMMENTS = "CLEAR_SUB_COMMENTS";

export const getSubCommentsAction = (rootCommentId: Number, subComments: CommentType[]) => (
  {
    type: GET_SUB_COMMENTS,
    subComments,
    rootCommentId,
  }
);

export const waitingSubCommentsAction = () => (
  {
    type: WAITING_SUB_COMMENTS,
  }
);

export const clearSubCommentsAction = () => (
  {
    type: CLEAR_SUB_COMMENTS,
  }
);
