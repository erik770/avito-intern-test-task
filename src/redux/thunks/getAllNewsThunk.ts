import { NewsType } from '../../types';
import { GetLatestNewsIds, GetNewsById } from '../../API/getLatestNews';
import { clearNewsAction, getNewsAction, getPartOfNewsAction, waitingNewsAction } from '../actions/GetNewsActions';
import { NUM_OF_NEWS_ON_MAIN_PAGE, PORTION_OF_NEWS_SIZE } from '../../consts/consts';


let newsArray: NewsType[] = [];
let latestNewsId: number[] = [];
// TODO: сохранять прошлые latestNewsId, сравнивать с новыми и добавлять только нужные а не удалять все и заново
export const getAllNewsThunk = (fullUpdate: boolean = false) => (async (dispatch: any) => {
    dispatch(waitingNewsAction());
    if (fullUpdate) {
        dispatch(clearNewsAction([]));
    }
    
    latestNewsId = await GetLatestNewsIds();
    for (let i = 0; i < NUM_OF_NEWS_ON_MAIN_PAGE; i++) {
        const newsItem = await GetNewsById(latestNewsId[i]).then(responce => {
            const numOfComments = responce.kids ? responce.kids.length : 0 
            return {
                id: responce.id,
                title: responce.title,
                rating: responce.score,
                author: responce.by,
                date: responce.time,
                comments: numOfComments,
            }
        }).catch((error) => {
            return {
                id: 0,
                title: '',
                rating: 0,
                author: '',
                date: 0,
                comments: 0
            }
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