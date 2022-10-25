import { FC } from 'react';
import { CommentType } from '../../types';
import styles from './Comment.module.scss';
import ReactHtmlParser from 'react-html-parser'; 

interface CommentProps {
    comment: CommentType,
}

const Comment: FC<CommentProps> = ({comment}) => {
    return (
        <div className={styles["comment"]}>
            <span className={styles["comment__author"]}>
            {comment.author}
            </span>
            <div className={styles["comment__text"]}>
            {ReactHtmlParser( comment.text)}
            </div>
            {!comment.subComments.length || <span className={styles["comment__repliesLink"]}>Show replies</span>   }
        </div>
    );
};

export default Comment;