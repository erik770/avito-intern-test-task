import { CommentType } from "../../types";
import { CLEAR_SUB_COMMENTS, GET_SUB_COMMENTS, WAITING_SUB_COMMENTS } from "../actions/SubCommentsActions";

interface ISubCommentsState {
  subComments: Map<number, CommentType[]>,
  isFetching: boolean,
}

const initialState: ISubCommentsState = {
  subComments: new Map(),
  isFetching: false,
};

export const SubCommentsReducer = (state = initialState, action: any): ISubCommentsState => {
  switch (action.type) {
    case GET_SUB_COMMENTS:
      return {
        ...state,
        subComments: state.subComments.set(action.rootCommentId, action.subComments),
        isFetching: false,
      };
    case WAITING_SUB_COMMENTS:
      return {
        ...state,
        isFetching: true,
      };
    case CLEAR_SUB_COMMENTS:
      return {
        ...state,
        subComments: new Map(),
      };
    default:
      return state;
  }
};
