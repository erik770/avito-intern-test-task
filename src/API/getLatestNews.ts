import axios from 'axios'

export async function GetLatestNewsIds() {
    return axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty').then(responce => responce.data);
}

export async function GetNewsById(id: number) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(responce => responce.data);
}