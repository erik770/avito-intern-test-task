import { NewsType } from '../../types';
import { GetLatestNewsIds, GetNewsById } from '../../API/getLatestNews';
import { getNewsAction, getPartOfNewsAction, waitingNewsAction } from '../actions/GetNewsActions';
import { NUM_OF_NEWS_ON_MAIN_PAGE, PORTION_OF_NEWS_SIZE } from '../../consts/consts';


let newsArray: NewsType[] = [];
let latestNewsId: number[] = [];
// let savedId = 0;
export const getAllNewsThunk = (fullUpdate: boolean = false) => (async (dispatch: any) => {
    dispatch(waitingNewsAction());
    if (fullUpdate) {
        // savedId = 0;
        latestNewsId.length = 0;
        newsArray.length = 0;
    }
    
    latestNewsId = await GetLatestNewsIds();
    for (let i = 0; i < NUM_OF_NEWS_ON_MAIN_PAGE; i++) {
        const newsItem = await GetNewsById(latestNewsId[i]).then(responce => {
            return {
                id: responce.id,
                title: responce.title,
                rating: responce.score,
                author: responce.by,
                date: responce.time,
                type: responce.type
            }
        }).catch((error) => {
            return {
                id: 0,
                title: '',
                rating: 0,
                author: '',
                date: 0,
                type: ''
            }
        })
        if (newsItem.id !== 0) {
            newsArray.push(newsItem);
        }
        if (!(i % PORTION_OF_NEWS_SIZE)) {
            dispatch(getPartOfNewsAction(newsArray));
            newsArray = [];
        }
    }
    dispatch(getNewsAction(newsArray))
});