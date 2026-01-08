import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Gallery from './assets/pages/Gallery';
import Review from './assets/pages/Review';
import Contactus from './assets/pages/Contactus';
import SuperDeluxeRoom from './assets/pages/SuperDeluxeRoom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/gallery',
                element: <Gallery />,
            },
            {
                path: '/review',
                element: <Review />,
            },
            {
                path: '/contactus',
                element: <Contactus />,
            },
            {
                path: '/SuperDeluxeRoom',
                element: <SuperDeluxeRoom />,
            },
        ],
    },
]);

export default router;
