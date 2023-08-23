//- 데이터 패칭, 이벤트 처리 등의 비즈니스 로직은 컨테이너가 담당한다.
//- UI 컴포넌트를 컨트롤하는 역할이다.

import {useCallback, useEffect, useRef} from 'react';
import * as fetcher from '../apis/TodoList';
import Create from '../components/TodoList/Create';
import {useTodoDispatch, useTodoState} from '../contexts/TodoList';

const TodoListContainer = () => {
    const todoState = useTodoState();
    const todoDispatch = useTodoDispatch();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const getTodos = useCallback(async () => {
        try {
            const res = await fetcher.getTodos();
            todoDispatch({type: 'GET', payload: res.data});
        } catch (e: unknown) {
            if (e instanceof Error) {
                alert(e.message);
            } else {
                console.error('확인할 수 없는 에러 발생');
            }
        }
    }, [todoDispatch]);

    const createTodo = useCallback(async () => {
        try {
            const res = await fetcher.createTodo({todo: inputRef.current?.value || ''});
            todoDispatch({type: 'CREATE', payload: res.data});
        } catch (e: unknown) {
            if (e instanceof Error) {
                alert(e.message);
            } else {
                console.error('확인할 수 없는 에러 발생');
            }
        }
    }, [todoDispatch]);

    const updateTodo = useCallback(
        async (id: number, value: string, isCompleted: boolean) => {
            try {
                const res = await fetcher.updateTodo(id, {todo: '', isCompleted: true});
                todoDispatch({type: 'UPDATE', payload: res.data});
            } catch (e: unknown) {
                if (e instanceof Error) {
                    alert(e.message);
                } else {
                    console.error('확인할 수 없는 에러 발생');
                }
            }
        },
        [todoDispatch]
    );

    const deleteTodo = useCallback(
        async (id: number) => {
            try {
                const res = await fetcher.deleteTodo(id);
                todoDispatch({type: 'DELETE', payload: res.data});
            } catch (e: unknown) {
                if (e instanceof Error) {
                    alert(e.message);
                } else {
                    console.error('확인할 수 없는 에러 발생');
                }
            }
        },
        [todoDispatch]
    );

    useEffect(() => {
        getTodos();
    }, [getTodos, todoState]);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createTodo();
    };

    return (
        <>
            <h1>TodoList Container</h1>
            <Create inputRef={inputRef} handleFormSubmit={handleFormSubmit} />
        </>
    );
};

export default TodoListContainer;
