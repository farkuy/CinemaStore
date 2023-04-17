import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, CINEMA_ROUTE, CONTENT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import ContentPage from "./pages/ContentPage";
import Auth from "./pages/Auth/Auth";
import Cinema from "./pages/Cinema/ Cinema";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        component: <Basket/>
    }
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
]