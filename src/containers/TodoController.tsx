import {useCallback} from 'react';
import * as fetcher from '../apis/Todo';
import {useNavigate} from 'react-router-dom';
import {useTodoDispatch} from '../contexts/TodoContext';
import {INVALID_TOKEN_MSG} from '../constants/message';
import ROUTES from '../constants/routes';

interface TodoControllerProps {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const TodoController = ({setIsLoading}: TodoControllerProps) => {
    const navigate = useNavigate();
    const todoDispatch = useTodoDispatch();

    const handleErrorResponse = () => {
        alert(INVALID_TOKEN_MSG);
        localStorage.removeItem('accessToken');
        navigate(ROUTES.SIGNIN);
    };

    const getTodo = useCallback(async () => {
        try {
            const res = await fetcher.getTodos();
            todoDispatch({type: 'GET', payload: res.data});
        } catch (e: unknown) {
            handleErrorResponse();
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
                handleErrorResponse();
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
                handleErrorResponse();
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
                handleErrorResponse();
            }
        },
        [navigate, todoDispatch]
    );

    return {getTodo, createTodo, updateTodo, deleteTodo};
};

export default TodoController;
