import { FC } from "react";

export type NewsType = {
  id: number,
  title: string,
  url: string,
  rating: number,
  author: string,
  date: number,
  comments: number[],
  commentsCounter: number,
};

export type RouteType = {
  path: string,
  component: FC,
};

export type CommentType = {
  id: number,
  author: string,
  text: string,
  subComments: number[],
  deleted: boolean,
};
