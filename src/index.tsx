import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/reset.css';
import {RouterProvider} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Router} from './Router';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <RouterProvider router={Router} />
        </HelmetProvider>
    </React.StrictMode>
);
