import {useRef} from 'react';
import Button from '../common/Button';
import * as S from '../../styles/Todo.styled';
import {useInput} from '../../hooks/useInput';

interface TodoCreateProps {
    createTodo: (value: string) => void;
}

const TodoCreate = ({createTodo}: TodoCreateProps) => {
    const [value, handleInputChange, setValue] = useInput('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (value.length) {
            createTodo(value);
        }
        setValue('');
        inputRef.current?.focus();
    };

    const handleCheckLength = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleInputChange(e);
        if (value.length > 29) {
            setValue(() => {
                return value.substring(0, 30);
            });
        }
    };

    return (
        <S.TodoCreateForm onSubmit={handleFormSubmit}>
            <input
                placeholder='할 일을 입력해 주세요...'
                data-testid='new-todo-input'
                type='text'
                value={value}
                onChange={handleCheckLength}
                ref={inputRef}
            />

            <Button type='submit' testid='new-todo-add-button'>
                추가
            </Button>
        </S.TodoCreateForm>
    );
};

export default TodoCreate;
