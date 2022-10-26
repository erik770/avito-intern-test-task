import axios from "axios";

export async function GetLatestNewsIds() {
  return axios.get("https://hacker-news.firebaseio.com/v0/newstories.json").then((responce) => responce.data);
}
// ?orderBy=%22$key%22&limitToFirst=${NUM_OF_NEWS_ON_MAIN_PAGE}
export async function GetNewsById(id: number) {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((responce) => responce.data);
}
// https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty
