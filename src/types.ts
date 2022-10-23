import { FC } from "react"

export type NewsType = {
    id: number
    title: string
    rating: number
    author: string
    date: number
    comments: number
}

export type RouteType = {
    path: string,
    component: FC,
}