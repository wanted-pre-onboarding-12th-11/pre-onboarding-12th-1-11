import {useEffect, useState} from 'react';
import Create from '../components/Todo/Create';
import {useTodoState} from '../contexts/TodoContext';
import Item from '../components/Todo/Item';

import * as S from '../styles/Todo.styled';

import TodoController from './TodoController';
const TodoContainer = () => {
    const todoState = useTodoState();
    const [isLoading, setIsLoading] = useState(true);
    const [modifyModeId, setModifyModeId] = useState<number | null>(null);
    const isNothing = !isLoading && todoState.length === 0;

    const {getTodo, createTodo, updateTodo, deleteTodo} = TodoController({setIsLoading});

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
