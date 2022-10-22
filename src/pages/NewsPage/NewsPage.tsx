import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { getAllNewsThunk } from '../../redux/thunks/getAllNewsThunk';

const NewsPage = () => {
    const state = useSelector((state: AppStateType) => state.News);
    const dispatch = useDispatch() as ThunkDispatch<AppStateType, void, Action>;

    const [newsArray, setNewsArray] = useState([]);
    const news = state.news;

    useEffect(() => {
        const update = setInterval(() =>  dispatch(getAllNewsThunk()), 60000);
        return () => clearInterval(update);
    }, [dispatch]);
    
    useEffect(() => {
        if (!news.length) {
            dispatch(getAllNewsThunk());
        }
        // dispatch(clearNewsItemAction());
    }, [news, dispatch]);

    return (
        <div>
          {news.map(el => <div>{el.author}</div>)}
          {state.isFetching && <h1> Loading ...</h1>}
        </div>
    );
};

export default NewsPage;