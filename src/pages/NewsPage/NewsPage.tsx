import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import NewsItem from '../../components/NewsItem/NewsItem';
import { clearNewsAction } from '../../redux/actions/NewsActions';
import { AppStateType } from '../../redux/store';
import { getAllNewsThunk } from '../../redux/thunks/getAllNewsThunk';
import styles from "./NewsPage.module.scss"

const NewsPage: FC = () => {
    const state = useSelector((state: AppStateType) => state.News);
    const dispatch = useDispatch() as ThunkDispatch<AppStateType, void, Action>;

    const [newsArray, setNewsArray] = useState([]);
    const news = state.news;

    const update = () => dispatch(getAllNewsThunk());
    

    useEffect(() => {
        state.news.length === 0 && update();
        const updateInterval = setInterval(() =>  update(), 60000);
        return () => clearInterval(updateInterval);
    }, [dispatch]);
    
  

    return (
        <>
        <Header showGoBackButton={false} refreshHandler={update}/>
        <div className={styles["container"]}>
          {state.news.map(el => <NewsItem key={el.id} news={el} isSelected={false}></NewsItem>)}
          {state.isFetching && <h1> Loading ...</h1>}
        </div>
        </>
    );
};

export default NewsPage;