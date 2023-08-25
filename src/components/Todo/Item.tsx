import * as TodoType from '../../types/TodoTypes';
import * as S from '../../styles/Todo.styled';
import {useInput} from '../../hooks/useInput';
import {useEffect, useRef} from 'react';

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
    const [modifiedValue, handleInputChange, setModifiedValue] = useInput(todo);

    const modifyInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (modifyInputRef.current) {
            modifyInputRef.current.focus();
        }
    }, [modifyModeId]);

    const handleIsCompletedChange = () => {
        updateTodo(id, todo, !isCompleted);
    };

    const handleDeleteClick = () => {
        if (window.confirm(`'${todo}' 항목을 삭제하시겠습니까?`)) {
            deleteTodo(id);
        }
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
        Promise.resolve(updateTodo(id, modifiedValue, isCompleted)).then(() =>
            setModifyModeId(null)
        );
    };

    return (
        <li>
            {!isModifyMode ? (
                <S.TodoItem className={isCompleted.toString()}>
                    <label htmlFor={id.toString()}>
                        <S.Checkbox
                            id={id.toString()}
                            type='checkbox'
                            checked={isCompleted}
                            onChange={handleIsCompletedChange}
                        />
                        <span>{todo}</span>
                    </label>

                    <div>
                        <S.ModifyButton
                            type='button'
                            testid='modify-button'
                            handler={handleModifyClick}
                            isDisabled={modifyModeId !== id && modifyModeId !== null}
                        >
                            수정
                        </S.ModifyButton>
                        <S.DeleteButton
                            type='button'
                            testid='delete-button'
                            handler={handleDeleteClick}
                            isDisabled={modifyModeId !== id && modifyModeId !== null}
                        >
                            삭제
                        </S.DeleteButton>
                    </div>
                </S.TodoItem>
            ) : (
                <S.ModifyForm onSubmit={handleModifySubmit}>
                    <label htmlFor={id.toString()}>
                        <S.Checkbox
                            id={id.toString()}
                            type='checkbox'
                            checked={isCompleted}
                            onChange={handleIsCompletedChange}
                        />
                        <S.ModifyInput
                            id={id.toString()}
                            type='text'
                            data-testid='modify-input'
                            value={modifiedValue}
                            onChange={handleInputChange}
                            maxLength={30}
                            ref={modifyInputRef}
                        />
                    </label>
                    <div>
                        <S.SubmitButton type='submit' testid='submit-button'>
                            제출
                        </S.SubmitButton>
                        <S.CancelButton
                            type='button'
                            testid='cancel-button'
                            handler={handleModifyCancelClick}
                        >
                            취소
                        </S.CancelButton>
                    </div>
                </S.ModifyForm>
            )}
        </li>
    );
};

export default Item;
