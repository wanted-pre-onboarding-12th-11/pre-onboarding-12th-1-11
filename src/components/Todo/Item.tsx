import {useState} from 'react';
import * as TodoType from '../../types/Todo';
import * as S from '../../styles/Todo.styled';

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
        if (window.confirm(`'${todo}' 항목을 삭제하시겠습니까?`)) {
            deleteTodo(id);
        }
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
        </>
    );
};

export default Item;
