import * as S from '../../styles/Auth.styled';
import {InputProps} from '../../types/CommonTypes';

const Input = ({label, testid, id, type, placeholder, value, onChange}: InputProps) => {
    return (
        <S.AuthInputStyled>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                data-testid={testid}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </S.AuthInputStyled>
    );
};

export default Input;
