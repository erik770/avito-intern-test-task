import { GetComment } from "../../API/fetchComments";
import { emptyComment } from "../../consts/consts";
import { CommentType } from "../../types";
import { getSubCommentsAction, waitingSubCommentsAction } from "../actions/SubCommentsActions";

// const SubCommnets: Map<number,CommentType[]> = new Map();

export const getSubCommentsThunk = (
  subCommentsIds: number[] = [],
  rootCommentId: number = 0,
) => (async (dispatch: any) => {
  dispatch(waitingSubCommentsAction());
  // !subCommentsIds.length && dispatch(getSubCommentsAction([]));

  let subComment: CommentType = emptyComment;
  // SubCommnets.set(rootCommentId, []);
  // dispatch(getSubCommentsAction(rootCommentId, []));

  const arr = [];
  for (let i = 0; i < subCommentsIds.length; ++i) {
    subComment = await GetComment(subCommentsIds[i]).then((responce) => ({
      id: responce.id,
      author: responce.by,
      text: responce.text,
      subComments: responce.kids ? responce.kids : [],
      deleted: responce.deleted || responce.dead,
    })).catch((() => emptyComment));
    arr.push(subComment);
  }
  // SubCommnets.set(rootCommentId, arr);
  dispatch(getSubCommentsAction(rootCommentId, arr));
});
