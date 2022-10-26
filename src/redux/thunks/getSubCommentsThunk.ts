import { FetchComment } from "../../API/fetchComment";
import { emptyComment } from "../../consts/consts";
import { CommentType } from "../../types";
import { getSubCommentsAction, waitingSubCommentsAction } from "../actions/SubCommentsActions";

export const getSubCommentsThunk = (
  subCommentsIds: number[] = [],
  rootCommentId: number = 0,
) => (async (dispatch: any) => {
  dispatch(waitingSubCommentsAction());

  let subComment: CommentType | Promise<CommentType> = emptyComment;
  const fetchedSubComments: CommentType[] & Promise<CommentType>[] = [];

  for (let i = 0; i < subCommentsIds.length; ++i) {
    subComment = FetchComment(subCommentsIds[i]).then((responce) => ({
      id: responce.id,
      author: responce.by,
      text: responce.text,
      subComments: responce.kids ? responce.kids : [],
      deleted: responce.deleted || responce.dead,
    })).catch((() => emptyComment));
    fetchedSubComments.push(subComment);
  }

  const resultSubComments = (await Promise
    .all<CommentType>(fetchedSubComments))
    .filter((el) => !el.deleted);

  dispatch(getSubCommentsAction(rootCommentId, resultSubComments));
});
