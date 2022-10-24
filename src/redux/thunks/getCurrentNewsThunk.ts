import { GetNewsById } from "../../API/getLatestNews";
import { emptyNews } from "../../consts/consts";
import { NewsType } from "../../types";
import { getCurrentNewsAction, waitingCurrentNewsAction } from "../actions/CurrentNewsActions";

export const getCurrentNewsThunk = (id: number) => (async (dispatch: any) => {
    dispatch(waitingCurrentNewsAction());

    let currentNews: NewsType = emptyNews;

    currentNews = await GetNewsById(id).then(responce => {
        return {
            id: responce.id,
            title: responce.title,
            rating: responce.score,
            author: responce.by,
            url: responce.url,
            date: responce.time,
            comments: responce.kids,
        }
    })

    dispatch(getCurrentNewsAction(currentNews));
});
