import { combineReducers, createStore, applyMiddleware } from "redux";
import GetNewsReducer from './reducers/GetNewsReducer';
// import GetNewsItemReducer from './reducers/GetNewsItemReducer';
// import GetRootCommentsReducer from './reducers/GetRootCommentsReducer';
// import GetSubCommentReducer from "./reducers/GetSubCommnetsReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    News: GetNewsReducer,
    // NewsItem: GetNewsItemReducer,
    // RootComments: GetRootCommentsReducer,
    // SubCommnets: GetSubCommentReducer
})

type RootReducerType = typeof rootReducer;


export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;