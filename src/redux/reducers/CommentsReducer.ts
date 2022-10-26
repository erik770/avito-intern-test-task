import { CommentType } from "../../types";
import { GET_COMMENTS, WAITING_COMMENTS } from "../actions/CommentsActions";

interface ICommentsState {
  comments: CommentType[],
  isFetching: boolean,
}

const initialState: ICommentsState = {
  comments: [],
  isFetching: false,
};

export const CommentsReducer = (state = initialState, action: any): ICommentsState => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
        isFetching: false,
      };
    case WAITING_COMMENTS:
      return {
        ...state,
        isFetching: true,
      };
      // case SET_ROOT_COMMENTS_ENDED:
      //     return {
      //         ...state,
      //         isLastComment: true,
      //     }
      // case CLEAR_ROOT_COMMENTS:
      //     return {
      //         ...state,
      //         comments: [],
      //         isLastComment: false,
      //     }
    default:
      return state;
  }
};
