import {useState} from 'react';
import * as TodoType from '../../types/TodoList';

interface ItemProps {
    item: TodoType.Item;
    updateTodo: (id: number, value: string, isCompleted: boolean) => void;
    deleteTodo: (id: number) => void;
}

const Item = ({item, updateTodo, deleteTodo}: ItemProps) => {
    const {id, todo, isCompleted} = item;

    const [isModifyMode, setIsModifyMode] = useState(false);
    const [modifiedValue, setModifiedValue] = useState(todo);

    const handleIsCompletedChange = () => {
        updateTodo(id, todo, !isCompleted);
    };

    const handleDeleteClick = () => {
        deleteTodo(id);
    };

    const handleModifyClick = () => {
        setIsModifyMode(true);
    };

    const handleModifyCancelClick = () => {
        setModifiedValue(todo);
    };

    const handleModifySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateTodo(id, modifiedValue, isCompleted);
        setIsModifyMode(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModifiedValue(e.target.value);
    };

    return (
        <label htmlFor={id.toString()}>
            {!isModifyMode ? (
                <div>
                    <div>
                        <input
                            id={id.toString()}
                            type='checkbox'
                            checked={isCompleted}
                            onChange={handleIsCompletedChange}
                        />
                        <span>{todo}</span>
                    </div>
                    <div>
                        <button
                            type='button'
                            data-testid='modify-button'
                            onClick={handleModifyClick}
                        >
                            수정
                        </button>
                        <button
                            type='button'
                            data-testid='delete-button'
                            onClick={handleDeleteClick}
                        >
                            삭제
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleModifySubmit}>
                    <input
                        id={id.toString()}
                        type='text'
                        data-testid='modify-input'
                        value={modifiedValue}
                        onChange={handleInputChange}
                    />
                    <div>
                        <button type='submit' data-testid='submit-button'>
                            제출
                        </button>
                        <button
                            type='button'
                            data-testid='cancel-button'
                            onClick={handleModifyCancelClick}
                        >
                            취소
                        </button>
                    </div>
                </form>
            )}
        </label>
    );
};

export default Item;
