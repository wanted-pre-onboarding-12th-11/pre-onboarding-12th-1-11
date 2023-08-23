import * as Api from './';
import API_KEY from '../constants/apiKey';

const TODO_PATH = '/todos';

export const getTodos = async () => {
    const response = await Api.get(API_KEY, TODO_PATH, true);
    return response;
};

export const createTodo = async (todo: {todo: string}) => {
    const response = await Api.post(API_KEY, TODO_PATH, todo, true);
    return response;
};

export const updateTodo = async (id: number, todo: {todo: string; isCompleted: boolean}) => {
    const response = await Api.put(API_KEY, `${TODO_PATH}${id}`, todo, true);
    return response;
};

export const deleteTodo = async (id: number) => {
    const response = await Api.delete(API_KEY, `${TODO_PATH}${id}`, true);
    return response;
};
