//- 데이터 패칭, 이벤트 처리 등의 비즈니스 로직은 컨테이너가 담당한다.
//- UI 컴포넌트를 컨트롤하는 역할이다.

import {useCallback, useEffect, useState} from 'react';
import * as fetcher from '../apis/Todo';
import Create from '../components/Todo/Create';
import {useTodoDispatch, useTodoState} from '../contexts/TodoContext';
import Item from '../components/Todo/Item';
import {INVALID_TOKEN_MSG} from '../constants/message';
import * as S from '../styles/Todo.styled';
import {useNavigate} from 'react-router-dom';
import ROUTES from '../constants/routes';

const TodoContainer = () => {
    const navigate = useNavigate();

    const todoState = useTodoState();
    const todoDispatch = useTodoDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [modifyModeId, setModifyModeId] = useState<number | null>(null);
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

export default TodoContainer;
