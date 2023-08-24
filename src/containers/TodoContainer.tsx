import {useCallback, useEffect, useState} from 'react';
import * as fetcher from '../apis/Todo';
import {INVALID_TOKEN_MSG} from '../constants/message';
import ROUTES from '../constants/routes';
import Todo from '../components/Todo';
import {useNavigate} from 'react-router-dom';
import {useTodoDispatch} from '../contexts/TodoContext';
import {useTodoState} from '../contexts/TodoContext';

const TodoContainer = () => {
    const navigate = useNavigate();
    const todoState = useTodoState();
    const todoDispatch = useTodoDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const isNothing = !isLoading && todoState.length === 0;

    const getTodo = useCallback(async () => {
        try {
            const res = await fetcher.getTodos();
            todoDispatch({type: 'GET', payload: res.data});
        } catch (e: unknown) {
            alert(INVALID_TOKEN_MSG);
            localStorage.removeItem('accessToken');
            navigate(ROUTES.SIGNIN);
        } finally {
            setIsLoading(false);
        }
    }, [navigate, todoDispatch]);

    const createTodo = useCallback(
        async (value: string) => {
            try {
                const res = await fetcher.createTodo({todo: value});
                todoDispatch({type: 'CREATE', payload: res.data});
            } catch (e: unknown) {
                alert(INVALID_TOKEN_MSG);
                localStorage.removeItem('accessToken');
                navigate(ROUTES.SIGNIN);
            }
        },
        [navigate, todoDispatch]
    );

    const updateTodo = useCallback(
        async (id: number, value: string, isCompleted: boolean) => {
            try {
                const res = await fetcher.updateTodo(id, {todo: value, isCompleted});
                todoDispatch({type: 'UPDATE', payload: res.data});
            } catch (e: unknown) {
                alert(INVALID_TOKEN_MSG);
                localStorage.removeItem('accessToken');
                navigate(ROUTES.SIGNIN);
            }
        },
        [navigate, todoDispatch]
    );

    const deleteTodo = useCallback(
        async (id: number) => {
            try {
                await fetcher.deleteTodo(id);
                todoDispatch({type: 'DELETE', payload: id});
            } catch (e: unknown) {
                alert(INVALID_TOKEN_MSG);
                localStorage.removeItem('accessToken');
                navigate(ROUTES.SIGNIN);
            }
        },
        [navigate, todoDispatch]
    );

    useEffect(() => {
        getTodo();
    }, [getTodo]);

    return (
        <Todo
            todoState={todoState}
            createTodo={createTodo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            isLoading={isLoading}
            isNothing={isNothing}
        />
    );
};

export default TodoContainer;
