import { combineReducers, createStore, applyMiddleware } from "redux";
import NewsReducer from './reducers/NewsReducer';
import thunk from 'redux-thunk';
import CurrentNewsReducer from "./reducers/CurrentNewsReducer";
import CommentsReducer from "./reducers/CommentsReducer";
import SubCommentsReducer from "./reducers/SubCommnetsReducer";

const rootReducer = combineReducers({
    News: NewsReducer,
    CurrentNews: CurrentNewsReducer,
    Comments: CommentsReducer,
    SubCommnets: SubCommentsReducer,
})

type RootReducerType = typeof rootReducer;


export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;