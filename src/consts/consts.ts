import { NewsType } from "../types";

export const NUM_OF_NEWS_ON_MAIN_PAGE = 10;
export const PORTION_OF_NEWS_SIZE = 3;
export const emptyNews: NewsType = {
    id: 0,
    title: "Sorry something went wrong",
    rating: 0,
    author: "idfurnl",
    url: "github.com/erik770",
    date: Number(new Date()),
    comments: [],
}