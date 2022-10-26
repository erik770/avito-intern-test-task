import { CommentType } from "../../types";

export const GET_COMMENTS = "GET_COMMENTS";
export const WAITING_COMMENTS = "WAITING_COMMENTS";

export const getCommentsAction = (comments: CommentType[]) => (
  {
    type: GET_COMMENTS,
    comments,
  }
);

export const waitingCommentsAction = () => (
  {
    type: WAITING_COMMENTS,
  }
);
