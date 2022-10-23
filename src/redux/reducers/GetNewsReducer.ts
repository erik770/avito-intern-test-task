import { CLEAR_NEWS, GET_NEWS, GET_PART_NEWS, WAITING_NEWS } from '../actions/GetNewsActions';
import { NewsType } from '../../types';


interface INewsState {
    news: NewsType[],
    isFetching: boolean,
}

const initialState: INewsState = {
    news: [] as NewsType[],
    isFetching: false,
}

const GetNewsReducer = (state: INewsState = initialState, action: any): INewsState => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                news: [...state.news, ...action.news],
                isFetching: false,
            }
        case GET_PART_NEWS:
            return {
                ...state,
                news: [...state.news, ...action.news],
                isFetching: true,
            }
        case WAITING_NEWS:
            return {
                ...state,
                isFetching: true,
            }
        case CLEAR_NEWS:
            return {
                ...state,
                news: action.news,
            }
        default:
            return state
    }
}

export default GetNewsReducer;
