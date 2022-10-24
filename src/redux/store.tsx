import { combineReducers, createStore, applyMiddleware } from "redux";
import NewsReducer from './reducers/NewsReducer';
import thunk from 'redux-thunk';
import CurrentNewsReducer from "./reducers/CurrentNewsReducer";

const rootReducer = combineReducers({
    News: NewsReducer,
    CurrentNews: CurrentNewsReducer,
    // RootComments: GetRootCommentsReducer,
    // SubCommnets: GetSubCommentReducer
})

type RootReducerType = typeof rootReducer;


export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;