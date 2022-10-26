import axios from "axios";
import { NUM_OF_NEWS_ON_MAIN_PAGE } from "../consts/consts";

export async function FetchLatestNewsIds() {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/newstories.json?orderBy=%22$key%22&limitToFirst=${NUM_OF_NEWS_ON_MAIN_PAGE}`)
    .then((responce) => responce.data);
}
export async function FetchNewsById(id: number) {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((responce) => responce.data);
}
