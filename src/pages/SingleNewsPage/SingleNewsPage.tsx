import React, { FC, useEffect } from 'react';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NewsItem from '../../components/NewsItem/NewsItem';
import { AppStateType } from '../../redux/store';
import styles from './SingleNewsPage.module.scss';
import { emptyNews } from '../../consts/consts';
import { getCurrentNewsThunk } from '../../redux/thunks/getCurrentNewsThunk';
import { getCurrentNewsAction } from '../../redux/actions/CurrentNewsActions';

const SingleNewsPage: FC = () => {
    let { id } = useParams<{ id: string }>();
    const dispatch = useDispatch() as ThunkDispatch<AppStateType, void, Action>;
    
    let { news } = useSelector((state: AppStateType) => state.News);
    let currentNewsState  = useSelector((state: AppStateType) => state.CurrentNews);

    useEffect(() => {
        if (news.length !== 0) {
            const findNews = news.find(el => el.id === +id) || emptyNews; 
            dispatch(getCurrentNewsAction(findNews));
        } else {
            dispatch(getCurrentNewsThunk(+id));
        }
    }, [dispatch]);

    const numOfComments = currentNewsState.currentNews.comments?.length;
    const commentsString = numOfComments === 1 ? numOfComments + " comment" : numOfComments + " comments";

    return (
        <div className={styles["container"]}>
            {currentNewsState.isFetching && <h3>Loading...</h3>}
            {!currentNewsState.isFetching && <NewsItem news={currentNewsState.currentNews} isSelected={true} />}
            <div className={styles["comments"]}>
                <h3 className={styles["comments__title"]}>{numOfComments ? commentsString : "No comments yet"}</h3>
                {/* {numOfComments && <hr />} */}
            </div>
        </div>
    );
};

export default SingleNewsPage;