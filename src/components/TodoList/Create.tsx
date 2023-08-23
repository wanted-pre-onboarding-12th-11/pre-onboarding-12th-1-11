import {LegacyRef} from 'react';

interface TodoCreateProps {
    inputRef: LegacyRef<HTMLInputElement> | undefined;
    handleFormSubmit: (e: React.FormEvent) => void;
}

const TodoCreate = ({inputRef, handleFormSubmit}: TodoCreateProps) => {
    return (
        <form onSubmit={handleFormSubmit}>
            <input
                placeholder='할 일을 입력해 주세요...'
                data-testid='new-todo-input'
                type='text'
                ref={inputRef}
            />
            <button data-testid='new-todo-add-button' type='submit'>
                추가
            </button>
        </form>
    );
};

export default TodoCreate;
