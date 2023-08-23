import {useState} from 'react';
import * as TodoType from '../../types/TodoList';

interface ButtonProps {
    name: string;
    type: 'button' | 'submit';
    testid: string;
    handler?: () => void;
    isDisabled?: boolean;
}

const Button = ({name, type, testid, handler, isDisabled = false}: ButtonProps) => {
    return (
        <button type={type} data-testid={testid} onClick={handler} disabled={isDisabled}>
            {name}
        </button>
    );
};

interface ItemProps {
    item: TodoType.Item;
    updateTodo: (id: number, value: string, isCompleted: boolean) => void;
    deleteTodo: (id: number) => void;
    modifyModeId: number | null;
    setModifyModeId: (id: number | null) => void;
}

const Item = ({item, updateTodo, deleteTodo, modifyModeId, setModifyModeId}: ItemProps) => {
    const {id, todo, isCompleted} = item;
    const isModifyMode = modifyModeId === id;
    const [modifiedValue, setModifiedValue] = useState(todo);

    const handleIsCompletedChange = () => {
        updateTodo(id, todo, !isCompleted);
    };

    const handleDeleteClick = () => {
        deleteTodo(id);
    };

    const handleModifyClick = () => {
        setModifyModeId(id);
    };

    const handleModifyCancelClick = () => {
        setModifiedValue(todo);
        setModifyModeId(null);
    };

    const handleModifySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateTodo(id, modifiedValue, isCompleted);
        setModifyModeId(null);
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
                        <Button
                            name='수정'
                            type='button'
                            testid='modify-button'
                            handler={handleModifyClick}
                            isDisabled={modifyModeId !== id && modifyModeId !== null}
                        />
                        <Button
                            name='삭제'
                            type='button'
                            testid='delete-button'
                            handler={handleDeleteClick}
                            isDisabled={modifyModeId !== id && modifyModeId !== null}
                        />
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
                        <Button name='제출' type='submit' testid='submit-button' />
                        <Button
                            name='취소'
                            type='button'
                            testid='cancel-button'
                            handler={handleModifyCancelClick}
                        />
                    </div>
                </form>
            )}
        </label>
    );
};

export default Item;
