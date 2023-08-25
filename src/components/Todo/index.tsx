import * as S from '../../styles/Todo.styled';
import Create from '../Todo/Create';
import Item from '../Todo/Item';
import {useState} from 'react';
import * as TodoType from '../../types/TodoTypes';

interface TodoProps {
    todoState: TodoType.Item[];
    createTodo: (value: string) => Promise<void>;
    updateTodo: (id: number, value: string, isCompleted: boolean) => Promise<void>;
    deleteTodo: (id: number) => Promise<void>;
    isLoading: boolean;
    isNothing: boolean;
}

const Todo = ({todoState, createTodo, updateTodo, deleteTodo, isLoading, isNothing}: TodoProps) => {
    const [modifyModeId, setModifyModeId] = useState<number | null>(null);

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

export default Todo;
