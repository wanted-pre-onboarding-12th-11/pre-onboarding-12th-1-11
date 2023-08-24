import {createBrowserRouter, Navigate} from 'react-router-dom';
import App from './App';
import TodoPage from './pages/Todo';
import NotFound from './pages/NotFound';
import {Signup} from './pages/Signup';
import {Signin} from './pages/Signin';
import ROUTES from './constants/routes';

import {redirectTodo, redirectSignin} from './utils/redirect';

export const Router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Navigate to='/todo' replace={true} />,
                loader: redirectTodo,
            },
            {
                path: ROUTES.SIGNIN,
                element: <Signin />,
                loader: redirectTodo,
            },
            {
                path: ROUTES.SIGNUP,
                element: <Signup />,
                loader: redirectTodo,
            },
            {
                path: ROUTES.TODO,
                element: <TodoPage />,
                loader: redirectSignin,
            },
        ],
        errorElement: <NotFound />,
    },
]);
