import Home from "../pages/Home";
import Share from "../pages/Share";

export const ROUTES = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/share',
        exact: false,
        component: Share
    }
]