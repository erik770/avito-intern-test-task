import React, { FC } from 'react';
import { NewsType } from '../../types';
import { formatDate } from '../../utils/formatDate';
import styles from "./NewsItem.module.scss";
import starIcon from "../../img/star1.svg";
import commentIcon from "../../img/comment.svg";
import { Link } from 'react-router-dom';

interface NewsItemProps {
    news: NewsType
}

const NewsItem: FC<NewsItemProps> = ({ news }) => {
    // const navigate = useNavigate
    return (
        <Link to={`/news/${news.id}`} className={styles["newsItem"]}>
            <div className={styles["newsItem__rating"]}>
                {news.rating}
                <img src={starIcon} alt="rating star icon"></img>
            </div>
            <div className={[styles["newsItem__info"], styles["info"]].join(" ")}>
                <p className={styles["info__title"]}>{news.title}</p>
                <span className={styles["info__author"]}><strong>Posted by {news.author} </strong></span>
                <span className={styles["info__date"]}>&#8226; {formatDate(news.date) + " ago "}</span>
                <div className={styles["info__comments"]}>
                    <img src={commentIcon} alt="comment icon"></img>    
                    {news.comments} comments
                </div>
            </div>


        </Link>
    );
};

export default NewsItem;