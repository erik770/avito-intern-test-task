import React, { FC, useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { CommentType } from "../../types";
import styles from "./Comment.module.scss";
import { AppStateType } from "../../redux/store";
import { getSubCommentsThunk } from "../../redux/thunks/getSubCommentsThunk";

interface CommentProps {
  comment: CommentType,
}

export const Comment: FC<CommentProps> = function ({ comment }) {
  const dispatch = useDispatch() as ThunkDispatch<AppStateType, void, Action>;
  const subCommentsState = useSelector((state: AppStateType) => state.SubCommnets);
  const [
    currentSubComments,
    setCurrentSubComments,
  ] = useState<CommentType[] | undefined>(subCommentsState.subComments.get(comment.id));
  const [isSubCommentsVisible, setIsSubCommentsVisible] = useState<boolean>(false);

  const showSubComments = () => {
    dispatch(getSubCommentsThunk(comment.subComments, comment.id));
    setIsSubCommentsVisible((currentState) => !currentState);
  };

  useEffect(() => {
    setCurrentSubComments(subCommentsState.subComments.get(comment.id));
  }, [subCommentsState.subComments.get(comment.id), comment.id, subCommentsState.subComments]);

  return (
    <div className={styles.comment}>
      <span className={styles.comment__author}>
        {comment.author}
      </span>
      <div className={styles.comment__text}>
        {ReactHtmlParser(comment.text)}
      </div>
      {!comment.subComments.length
        || <button type="button" onClick={showSubComments} className={styles.comment__repliesLink}>Show replies</button>}
      {isSubCommentsVisible && currentSubComments?.map((el) => <Comment key={el.id} comment={el} />)}
      {/* */}
    </div>
  );
};
