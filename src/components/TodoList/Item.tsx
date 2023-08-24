import {useState} from 'react';
import * as TodoType from '../../types/TodoList';
import * as S from '../../styles/TodoList.styled';

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModifiedValue(e.target.value);
    };

    const handleModifyCancelClick = () => {
        setModifiedValue(todo);
        setModifyModeId(null);
    };

    const handleModifySubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 수정 제출 시 깜빡임 발생 방지 (비동기 코드 동작 후 수정 인풋 컴포넌트 숨김)
        Promise.resolve(updateTodo(id, modifiedValue, isCompleted)).then(() =>
            setModifyModeId(null)
        );
    };

    return (
        <>
            {!isModifyMode ? (
                <S.TodoItem>
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
                            name='수정'
                            type='button'
                            testid='modify-button'
                            handler={handleModifyClick}
                            isDisabled={modifyModeId !== id && modifyModeId !== null}
                        />
                        <S.DeleteButton
                            name='삭제'
                            type='button'
                            testid='delete-button'
                            handler={handleDeleteClick}
                            isDisabled={modifyModeId !== id && modifyModeId !== null}
                        />
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
                        />
                    </label>
                    <div>
                        <S.SubmitButton name='제출' type='submit' testid='submit-button' />
                        <S.CancelButton
                            name='취소'
                            type='button'
                            testid='cancel-button'
                            handler={handleModifyCancelClick}
                        />
                    </div>
                </S.ModifyForm>
            )}
        </>
    );
};

export default Item;
