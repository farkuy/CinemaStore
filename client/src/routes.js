import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    CINEMA_ROUTE, CONTENT_LIST_ROUTE,
    CONTENT_ROUTE, FILM_PAGE,
    LOGIN_ROUTE, PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    START_ROUTE
} from "./utils/consts";
import Basket from "./pages/Basket";
import ContentPage from "./pages/ContentPage";
import Auth from "./pages/Auth/Auth";
import Cinema from "./pages/Cinema/ Cinema";
import StartPage from "./pages/StartPage";
import ContentList from "./components/ContentList";
import FilmPage from "./pages/FilmPage";
import Profile from "./pages/Profile/Profile";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: <Admin/>
    },
    {
        path: PROFILE_ROUTE,
        component: <Profile/>
    },
    {
        path: BASKET_ROUTE,
        component: <Basket/>
    },
]

export const publicRotes = [
    {
        path: CONTENT_ROUTE + '/:id',
        component: <ContentPage/>
    },
    {
        path: REGISTRATION_ROUTE,
        component: <Auth/>
    },
    {
        path: CINEMA_ROUTE,
        component: <Cinema/>
    },
    {
        path: LOGIN_ROUTE,
        component: <Auth/>
    },
    {
        path: START_ROUTE,
        component: <StartPage/>
    },
    {
        path: CONTENT_LIST_ROUTE,
        component: <ContentList/>
    },
    {
        path: FILM_PAGE,
        component: <FilmPage/>
    }
]