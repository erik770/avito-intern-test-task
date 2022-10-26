import { FC, useEffect, useState } from 'react';
import { CommentType } from '../../types';
import styles from './Comment.module.scss';
import ReactHtmlParser from 'react-html-parser'; 
import { AppStateType } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { getSubCommentsAction } from '../../redux/actions/SubCommentsActions';
import { getSubCommentsThunk } from '../../redux/thunks/getSubCommentsThunk';

interface CommentProps {
    comment: CommentType,
}

const Comment: FC<CommentProps> = ({comment}) => {
    const dispatch = useDispatch() as ThunkDispatch<AppStateType, void, Action>;
    let subCommentsState = useSelector((state: AppStateType) => state.SubCommnets);
    const [currentSubComments, setCurrentSubComments] = useState(subCommentsState.subComments.get(comment.id));

    const onclick = () => {
        dispatch(getSubCommentsThunk(comment.subComments, comment.id)).then(() => {

        });
    }
    useEffect(() => {
        setCurrentSubComments(subCommentsState.subComments.get(comment.id));
    }, [subCommentsState.subComments.get(comment.id)])
    return (
        <div className={styles["comment"]}>
            <span className={styles["comment__author"]}>
            {comment.author}
            </span>
            <div className={styles["comment__text"]}>
            {ReactHtmlParser( comment.text)}
            </div>
            {!comment.subComments.length || <span onClick={onclick} className={styles["comment__repliesLink"]}>Show replies</span>   }
            {currentSubComments && currentSubComments.map(el => <Comment key={el.id} comment={el}/>)}
            {/* */}
        </div>
    );
};

export default Comment;