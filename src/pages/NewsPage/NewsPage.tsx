import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewsItem from '../../components/NewsItem/NewsItem';
import { AppStateType } from '../../redux/store';
import { getAllNewsThunk } from '../../redux/thunks/getAllNewsThunk';
import styles from "./NewsPage.module.scss"

const NewsPage = () => {
    const state = useSelector((state: AppStateType) => state.News);
    const dispatch = useDispatch() as ThunkDispatch<AppStateType, void, Action>;

    const [newsArray, setNewsArray] = useState([]);
    const news = state.news;

    useEffect(() => {
        dispatch(getAllNewsThunk());
        const update = setInterval(() =>  dispatch(getAllNewsThunk(true)), 60000);
        return () => clearInterval(update);
    }, [dispatch]);
    
  

    return (
        <div className={styles["container"]}>
          {state.news.map(el => <NewsItem news={el}></NewsItem>)}
          {state.isFetching && <h1> Loading ...</h1>}
        </div>
    );
};

export default NewsPage;