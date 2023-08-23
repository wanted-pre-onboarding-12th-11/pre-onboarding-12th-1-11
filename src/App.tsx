import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import ROUTES from './constants/routes';
import TodoListPage from './pages/TodoList';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to={ROUTES.TODO} />} />
                <Route path={ROUTES.SIGNIN} />
                <Route path={ROUTES.SIGNUP} />
                <Route path={ROUTES.TODO} element={<TodoListPage />} />
                <Route path='/*' element={<Navigate to={ROUTES.TODO} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
