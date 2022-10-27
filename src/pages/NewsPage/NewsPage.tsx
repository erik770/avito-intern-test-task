import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../../components/Header/Header";
import { Loader } from "../../components/Loader/Loader";
import { NewsItem } from "../../components/NewsItem/NewsItem";
import { NEWS_UPDATE_INTERVAL } from "../../consts/consts";
import { AppStateType } from "../../redux/store";
import { getAllNewsThunk } from "../../redux/thunks/getAllNewsThunk";
import styles from "./NewsPage.module.scss";

export const NewsPage: FC = function () {
  const newsState = useSelector((state: AppStateType) => state.News);
  const dispatch = useDispatch() as ThunkDispatch<AppStateType, void, Action>;

  const update = () => dispatch(getAllNewsThunk());

  useEffect(() => {
    !newsState.news.length && update();
    const updateInterval = setInterval(() => update(), NEWS_UPDATE_INTERVAL);
    return () => clearInterval(updateInterval);
  }, []);

  return (
    <>
      <Header showGoBackButton={false} refreshHandler={update} />
      <div className={styles.container}>
        {newsState.news.map((el) => <NewsItem key={el.id} news={el} isSelected={false} />)}
        {newsState.isFetching && <Loader />}
      </div>
    </>
  );
};
