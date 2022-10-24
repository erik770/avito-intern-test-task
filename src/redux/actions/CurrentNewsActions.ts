// import { NewsItemType } from '../../types/types'

import { NewsType } from "../../types";


export const GET_CURRENT_NEWS = 'GET_CURRENT_NEWS';
export const WAITING_CURRENT_NEWS = 'WAITING_CURRENT_NEWS';
// export const CLEAR_CURRENT_NEWS = 'CLEAR_ITEM_NEWS';

export const getCurrentNewsAction = (newsItem: NewsType) => (
    {
        type: GET_CURRENT_NEWS,
        newsItem: newsItem
    }
);

export const waitingCurrentNewsAction = () => (
    { type: WAITING_CURRENT_NEWS }
);

// export const clearCurrentNewsAction = () => (
//     { type: CLEAR_CURRENT_NEWS }
// );