import React, { FC, useEffect } from "react";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { isConstructorDeclaration } from "typescript";
import { NewsItem } from "../../components/NewsItem/NewsItem";
import { AppStateType } from "../../redux/store";
import styles from "./SingleNewsPage.module.scss";
import { emptyNews } from "../../consts/consts";
import { getCurrentNewsThunk } from "../../redux/thunks/getCurrentNewsThunk";
import { getCurrentNewsAction } from "../../redux/actions/CurrentNewsActions";
import { getRootCommentsThunk } from "../../redux/thunks/getCommentsThunk";
import { Comment } from "../../components/Comment/Comment";
import { Header } from "../../components/Header/Header";
import { clearSubCommentsAction } from "../../redux/actions/SubCommentsActions";

export const SingleNewsPage: FC = function () {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch() as ThunkDispatch<AppStateType, void, Action>;

  const { news } = useSelector((state: AppStateType) => state.News);
  const currentNewsState = useSelector((state: AppStateType) => state.CurrentNews);
  const commentsState = useSelector((state: AppStateType) => state.Comments);

  const upadateComments = () => {
    dispatch(getCurrentNewsThunk(+id));
    dispatch(clearSubCommentsAction());
  };

  const currentNewsIsEmpty = currentNewsState.currentNews === emptyNews;
  const loadingCurrentNews = currentNewsState.isFetching && currentNewsIsEmpty;

  useEffect(() => {
    if (news.length !== 0) {
      const findNews = news.find((el) => el.id === +id) || emptyNews;
      dispatch(getCurrentNewsAction(findNews));
      dispatch(getRootCommentsThunk(findNews.comments));
    } else {
      dispatch(getCurrentNewsThunk(+id));
    }
  }, []);

  const numOfComments = currentNewsState.currentNews.comments?.length;
  return (
    <>
      <Header showGoBackButton refreshHandler={upadateComments} />
      <div className={styles.container}>
        {loadingCurrentNews && <h3>Loading...</h3>}
        {!loadingCurrentNews && !currentNewsIsEmpty
          && <NewsItem news={currentNewsState.currentNews} isSelected />}
        <div className={styles.comments}>
          {numOfComments
            ? (
              <h3 className={styles.comments__title}>
                Comments
                <span>
                  (
                  {numOfComments}
                  )
                </span>
                :
                {" "}
              </h3>
            )
            : (
              <h3 className={styles.comments__title}>
                No comments
                <span>yet</span>
              </h3>
            )}
          <div className={styles.comments__items}>
            {numOfComments
              ? commentsState.isFetching
                ? <h3>Loading...</h3>
                : commentsState.comments.map((el) => <Comment key={el.id} comment={el} />)
              : <></>}
          </div>
        </div>
      </div>
    </>
  );
};
