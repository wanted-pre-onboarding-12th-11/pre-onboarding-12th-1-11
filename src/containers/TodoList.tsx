//- 데이터 패칭, 이벤트 처리 등의 비즈니스 로직은 컨테이너가 담당한다.
//- UI 컴포넌트를 컨트롤하는 역할이다.

import {useCallback, useEffect} from 'react';
import * as fetcher from '../apis/TodoList';
import Create from '../components/TodoList/Create';
import {useTodoDispatch, useTodoState} from '../contexts/TodoList';
import Item from '../components/TodoList/Item';

const TodoListContainer = () => {
    const todoState = useTodoState();
    const todoDispatch = useTodoDispatch();

    const getTodos = useCallback(async () => {
        // console.log('서버로 부터 데이터 받아옴');
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

    const createTodo = useCallback(
        async (value: string) => {
            try {
                const res = await fetcher.createTodo({todo: value});
                todoDispatch({type: 'CREATE', payload: res.data});
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

    const updateTodo = useCallback(
        async (id: number, value: string, isCompleted: boolean) => {
            try {
                const res = await fetcher.updateTodo(id, {todo: value, isCompleted});
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
                await fetcher.deleteTodo(id);
                todoDispatch({type: 'DELETE', payload: id});
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
    }, [getTodos]);

    // useEffect(() => {
    //     console.log(2);
    // }, [todoState]);

    return (
        <>
            <h1>TodoList Container</h1>
            <Create createTodo={createTodo} />
            {todoState.map(item => (
                <Item
                    key={`todo-${item.id}`}
                    item={item}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </>
    );
};

export default TodoListContainer;
