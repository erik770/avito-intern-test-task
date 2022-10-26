import axios from "axios";

export async function FetchComment(id: number) {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((responce) => responce.data);
}
