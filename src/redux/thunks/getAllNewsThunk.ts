import { NewsType } from "../../types";
import { GetLatestNewsIds, GetNewsById } from "../../API/fetchNews";
import {
  clearNewsAction, getNewsAction, getPartOfNewsAction, waitingNewsAction,
} from "../actions/NewsActions";
import { emptyNews, NUM_OF_NEWS_ON_MAIN_PAGE, PORTION_OF_NEWS_SIZE } from "../../consts/consts";

// TODO: сохранять прошлые latestNewsId,
// сравнивать с новыми и добавлять только нужные а не удалять все и заново
export const getAllNewsThunk = () => (async (dispatch: any) => {
  dispatch(waitingNewsAction());
  dispatch(clearNewsAction());

  const fetchedNews: NewsType[] & Promise<NewsType>[] = [];
  const latestNewsId: number[] = await GetLatestNewsIds();
  let newsItem: NewsType | Promise<NewsType> = emptyNews;
  let resultNewsArr: NewsType[] = [];

  for (let i = 0; i < NUM_OF_NEWS_ON_MAIN_PAGE; ++i) {
    newsItem = GetNewsById(latestNewsId[i]).then((responce) => ({
      id: responce.id,
      title: responce.title,
      rating: responce.score,
      author: responce.by,
      url: responce.url,
      date: responce.time,
      comments: responce.kids ? responce.kids : [],
    })).catch(() => emptyNews);

    fetchedNews.push(newsItem);

    if (!(i % PORTION_OF_NEWS_SIZE)) {
      resultNewsArr = (await Promise.all<NewsType>(fetchedNews)).filter(el => el !== emptyNews);
      dispatch(getPartOfNewsAction(resultNewsArr));
      fetchedNews.length = 0;
    }
  }
  resultNewsArr = (await Promise.all<NewsType>(fetchedNews)).filter(el => el !== emptyNews);
  dispatch(getNewsAction(resultNewsArr));
});
