import { emptyNews } from "../../consts/consts";
import { NewsType } from "../../types";
import { GET_CURRENT_NEWS, WAITING_CURRENT_NEWS } from "../actions/CurrentNewsActions";

interface ICurrentNewsState {
  currentNews: NewsType,
  isFetching: boolean,
}

const initialState: ICurrentNewsState = {
  currentNews: emptyNews,
  isFetching: false,
};

export const CurrentNewsReducer = (state = initialState, action: any): ICurrentNewsState => {
  switch (action.type) {
    case GET_CURRENT_NEWS:
      return {
        ...state,
        currentNews: action.newsItem,
        isFetching: false,
      };
    case WAITING_CURRENT_NEWS:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};
