import {useRef} from 'react';
import Button from '../common/Button';
import * as S from '../../styles/Todo.styled';

interface TodoCreateProps {
    createTodo: (value: string) => void;
}

const TodoCreate = ({createTodo}: TodoCreateProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const value = inputRef.current?.value || null;
        if (value && value !== '') {
            createTodo(value || '');
        }
        if (inputRef.current) {
            inputRef.current.value = '';
            inputRef.current.focus();
        }
    };

    return (
        <S.TodoCreateForm onSubmit={handleFormSubmit}>
            <input
                placeholder='할 일을 입력해 주세요...'
                data-testid='new-todo-input'
                type='text'
                ref={inputRef}
            />

            <Button type='submit' testid='new-todo-add-button'>
                추가
            </Button>
        </S.TodoCreateForm>
    );
};

export default TodoCreate;
