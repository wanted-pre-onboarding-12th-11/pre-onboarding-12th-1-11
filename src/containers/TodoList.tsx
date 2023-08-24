//- 데이터 패칭, 이벤트 처리 등의 비즈니스 로직은 컨테이너가 담당한다.
//- UI 컴포넌트를 컨트롤하는 역할이다.

import {useCallback, useEffect, useState} from 'react';
import * as fetcher from '../apis/TodoList';
import Create from '../components/TodoList/Create';
import {useTodoDispatch, useTodoState} from '../contexts/TodoList';
import Item from '../components/TodoList/Item';
import {INVALID_ERROR_MSG} from '../constants/message';
import * as S from '../styles/TodoList.styled';

const TodoListContainer = () => {
    const todoState = useTodoState();
    const todoDispatch = useTodoDispatch();
    const [isLoading, setIsLoading] = useState(true);

    const getTodos = useCallback(async () => {
        // console.log('서버로 부터 데이터 받아옴');
        try {
            const res = await fetcher.getTodos();
            todoDispatch({type: 'GET', payload: res.data});
        } catch (e: unknown) {
            if (e instanceof Error) {
                alert(e.message);
            } else {
                console.error(INVALID_ERROR_MSG);
            }
        } finally {
            setIsLoading(false);
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
                    console.error(INVALID_ERROR_MSG);
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
                    console.error(INVALID_ERROR_MSG);
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
                    console.error(INVALID_ERROR_MSG);
                }
            }
        },
        [todoDispatch]
    );

    useEffect(() => {
        getTodos();
    }, [getTodos]);

    // 해당 파일에서는 데이터 패칭 및 상태 업데이트 관련 로직만 넣고 싶은데 아래 투두 수정 관련한 ui 상태가 추가되어 Create, Item만 있는 컴포넌트를 한 번 더 분리해야할지 고민됨
    // 분리하게 되면 위 함수들은 props drilling 해야되서 번거로울 수 있음 => class로 모듈화하면 될까..?!

    const [modifyModeId, setModifyModeId] = useState<number | null>(null);
    const isNothing = !isLoading && todoState.length === 0;

    return (
        <S.TodoContainer>
            <Create createTodo={createTodo} />
            {isLoading && (
                <S.Empty>
                    <S.EmptyMessage>로딩 중...</S.EmptyMessage>
                </S.Empty>
            )}
            {isNothing && (
                <S.Empty>
                    <S.BreakImage
                        src={'/assets/images/coffeebreak.png'}
                        alt='breaktime'
                        width='150px'
                    />
                    <S.EmptyMessage>아직 할 일이 없습니다!</S.EmptyMessage>
                </S.Empty>
            )}
            <S.TodoList>
                {todoState.map(item => (
                    <Item
                        key={`todo-${item.id}`}
                        item={item}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                        modifyModeId={modifyModeId}
                        setModifyModeId={setModifyModeId}
                    />
                ))}
            </S.TodoList>
        </S.TodoContainer>
    );
};

export default TodoListContainer;
