import { CommentType, NewsType } from "../types";

export const NUM_OF_NEWS_ON_MAIN_PAGE = 100;
export const PORTION_OF_NEWS_SIZE = 5;
const NEWS_UPDATE_INTERVAL_SEC = 60;
export const NEWS_UPDATE_INTERVAL = NEWS_UPDATE_INTERVAL_SEC * 1000;

export const emptyNews: NewsType = {
  id: 0,
  title: "Sorry something went wrong",
  rating: 0,
  author: "idfurnl",
  url: "github.com/erik770",
  date: Number(new Date()),
  comments: [],
  commentsCounter: 0,
};

export const emptyComment: CommentType = {
  id: 0,
  author: "idfurnl",
  text: "oops something went wrong",
  subComments: [],
  deleted: false,
};
