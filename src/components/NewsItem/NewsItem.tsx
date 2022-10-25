import React, { FC } from 'react';
import { NewsType } from '../../types';
import { formatDate } from '../../utils/formatDate';
import styles from "./NewsItem.module.scss";
import starIcon from "../../img/star1.svg";
import commentIcon from "../../img/comment.svg";
import { Link } from 'react-router-dom';

interface NewsItemProps {
    news: NewsType,
    isSelected: boolean
}

const NewsItem: FC<NewsItemProps> = ({ news, isSelected }) => {
    const numOfComments = news.comments?.length;
    const commentsString = numOfComments === 1 ? numOfComments + " comment" : numOfComments + " comments";

    const classesArr = [styles["newsItem"]];
    isSelected && classesArr.push(styles["link-disabled"]);

    return (
        <Link to={`/news/${news.id}`} className={classesArr.join(" ")}>

            <div className={styles["newsItem__sidebar"]}>
                {!isSelected
                    ? <> {news.rating} <img src={starIcon} alt="rating star icon" /> </>
                    : <div className={styles["sidebarPlug"]}></div>
                }
            </div>

            <div className={[styles["newsItem__info"], styles["info"]].join(" ")}>
                <p className={styles["info__title"]}>{news.title}</p>
                {isSelected &&
                    <div className={styles["info__url"]}>
                        Link:  {news.url ? <a href={news.url} >{news.url}</a> : "oops, no link provided"}
                    </div>
                }
                <span className={styles["info__author"]}><strong>Posted by {news.author} </strong></span>
                <span className={styles["info__date"]}>&#8226; {formatDate(news.date) + " ago "}</span>
                {!isSelected &&
                    <div className={styles["info__comments"]}>
                        <img src={commentIcon} alt="comment icon"></img>
                        {numOfComments ? commentsString : "No comments yet"}
                    </div>
                }

            </div>
        </Link >
    );
};

export default NewsItem;