import React, {Dispatch, ReactNode, createContext, useContext, useReducer} from 'react';
import * as TodoType from '../types/Todo';

type TodoAction =
    | {type: 'GET'; payload: TodoType.Item[]}
    | {type: 'CREATE'; payload: TodoType.Item}
    | {type: 'DELETE'; payload: number}
    | {type: 'UPDATE'; payload: TodoType.Item};

interface TodoProviderProps {
    children: ReactNode;
}

const initialState: TodoType.Item[] | [] = [];
const TodoStateContext = createContext<TodoType.Item[] | undefined>(undefined);

type TodoDispatch = Dispatch<TodoAction>;
const TodoDispatchContext = createContext<TodoDispatch | undefined>(undefined);

const todoReducer = (todos: TodoType.Item[], action: TodoAction): TodoType.Item[] => {
    switch (action.type) {
        case 'GET':
            return action.payload;

        case 'CREATE':
            return [...todos, action.payload];

        case 'DELETE':
            return todos.filter(todo => todo.id !== action.payload);

        case 'UPDATE':
            return todos.map(todo =>
                todo.id === action.payload.id
                    ? {...todo, todo: action.payload.todo, isCompleted: action.payload.isCompleted}
                    : todo
            );
        default:
            return todos;
    }
};

export const TodoProvider = ({children}: TodoProviderProps) => {
    const [todoState, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoDispatchContext.Provider value={dispatch}>
            <TodoStateContext.Provider value={todoState}>{children}</TodoStateContext.Provider>
        </TodoDispatchContext.Provider>
    );
};

export const useTodoState = () => {
    const state = useContext(TodoStateContext);
    if (!state) throw new Error('TodoProvider not found');
    return state;
};

export const useTodoDispatch = () => {
    const dispatch = useContext(TodoDispatchContext);
    if (!dispatch) throw new Error('TodoProvider not found');
    return dispatch;
};
