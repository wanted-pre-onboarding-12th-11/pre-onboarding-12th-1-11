import * as Api from './';
import API_KEY from '../constants/apiKey';

const TODO_PATH = '/todos';

export async function getTodos() {
    const response = await Api.get(API_KEY, TODO_PATH, true);
    return response;
}

export async function createTodo(todo: {todo: string}) {
    const response = await Api.post(API_KEY, TODO_PATH, todo, true);
    return response;
}

export async function updateTodo(id: number, todo: {todo: string; isCompleted: boolean}) {
    const response = await Api.put(API_KEY, `${TODO_PATH}${id}`, todo, true);
    return response;
}

export async function deleteTodo(id: number) {
    const response = await Api.delete(API_KEY, `${TODO_PATH}${id}`, true);
    return response;
}
