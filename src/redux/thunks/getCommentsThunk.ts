import { GetComment } from "../../API/fetchComments";
import { emptyComment } from "../../consts/consts";
import { CommentType } from "../../types";
import { getCommentsAction, waitingCommentsAction } from "../actions/CommentsActions";

export const getRootCommentsThunk = (commentsIds: Array<number> = []) => (async (dispatch: any) => {
  const fetchedComments: CommentType[] & Promise<CommentType>[] = [];
  dispatch(getCommentsAction([]));
  dispatch(waitingCommentsAction());

  let singleComment: CommentType | Promise<CommentType> = emptyComment;

  for (let i = 0; i < commentsIds.length; ++i) {
    singleComment = GetComment(commentsIds[i]).then((responce) => ({
      id: responce.id,
      author: responce.by,
      text: responce.text,
      subComments: responce.kids ? responce.kids : [],
      deleted: responce.deleted || responce.dead,
    })).catch((() => emptyComment));

    fetchedComments.push(singleComment);
  }
  
  const resultComments = (await Promise.all<CommentType>(fetchedComments)).filter(el => !el.deleted);
  dispatch(getCommentsAction(resultComments));
});
