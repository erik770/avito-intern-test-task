import { NewsType } from "../../types";

export const GET_NEWS = "GET_NEWS";
export const WAITING_NEWS = "WAITING_NEWS";
export const GET_PART_NEWS = "GET_PART_NEWS";
export const CLEAR_NEWS = "CLEAR_NEWS";

export const getNewsAction = (news: NewsType[]) => (
  {
    type: GET_NEWS,
    news,
  }
);

export const getPartOfNewsAction = (news: NewsType[]) => (
  {
    type: GET_PART_NEWS,
    news,
  }
);

export const clearNewsAction = () => (
  {
    type: CLEAR_NEWS,
  }
);

export const waitingNewsAction = () => (
  {
    type: WAITING_NEWS,
  }
);
