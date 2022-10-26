import axios from "axios";

export async function GetComment(id: number) {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((responce) => responce.data);
}
