import { FetchNewsById } from "../../API/fetchNews";
import { emptyNews } from "../../consts/consts";
import { NewsType } from "../../types";
import { getCurrentNewsAction, waitingCurrentNewsAction } from "../actions/CurrentNewsActions";
import { getRootCommentsThunk } from "./getCommentsThunk";

export const getCurrentNewsThunk = (id: number) => (async (dispatch: any) => {
  dispatch(waitingCurrentNewsAction());

  let currentNews: NewsType = emptyNews;

  currentNews = await FetchNewsById(id).then((responce) => ({
    id: responce.id,
    title: responce.title,
    rating: responce.score,
    author: responce.by,
    url: responce.url,
    date: responce.time,
    comments: responce.kids ?? [],
    commentsCounter: responce.descendants ?? 0,
  }));

  dispatch(getCurrentNewsAction(currentNews));
  dispatch(getRootCommentsThunk(currentNews.comments));
});
