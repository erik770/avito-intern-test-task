import { NewsType } from '../../types';
import { GetLatestNewsIds, GetNewsById } from '../../API/fetchNews';
import { clearNewsAction, getNewsAction, getPartOfNewsAction, waitingNewsAction } from '../actions/NewsActions';
import { emptyNews, NUM_OF_NEWS_ON_MAIN_PAGE, PORTION_OF_NEWS_SIZE } from '../../consts/consts';


// TODO: сохранять прошлые latestNewsId, сравнивать с новыми и добавлять только нужные а не удалять все и заново
export const getAllNewsThunk = (fullUpdate: boolean = false) => (async (dispatch: any) => {
    let newsArray: NewsType[] = [];
    let latestNewsId: number[] = [];
    dispatch(waitingNewsAction());
    dispatch(clearNewsAction([]));

    latestNewsId = await GetLatestNewsIds();
    for (let i = 0; i < NUM_OF_NEWS_ON_MAIN_PAGE; i++) {
        const newsItem = await GetNewsById(latestNewsId[i]).then(responce => {
            return {
                id: responce.id,
                title: responce.title,
                rating: responce.score,
                author: responce.by,
                url: responce.url,
                date: responce.time,
                comments: responce.kids ? responce.kids : [],
            }
        }).catch((error) => {
            return emptyNews;
        })
        if (newsItem.id !== 0) {
            newsArray.push(newsItem);
        }
        if (!(i % PORTION_OF_NEWS_SIZE)) {
            dispatch(getPartOfNewsAction(newsArray));
            newsArray.length = 0;
        }
    }
    dispatch(getNewsAction(newsArray))
});