import Home from "../pages/Home";
import Share from "../pages/Share";

export const ROUTES = [
    {
        path: '/',
        exact: true,
        auth: false,
        component: Home
    },
    {
        path: '/share',
        exact: false,
        auth: true,
        component: Share
    }
]