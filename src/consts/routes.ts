import { NewsPage } from "../pages/NewsPage/NewsPage";
import { SingleNewsPage } from "../pages/SingleNewsPage/SingleNewsPage";
import { RouteType } from "../types";

export const ROUTES: RouteType[] = [
  { path: "/news/:id", component: SingleNewsPage },
  { path: "/news", component: NewsPage },
  { path: "/", component: NewsPage },
  // { path: '/*', component: NewsPage }
];
