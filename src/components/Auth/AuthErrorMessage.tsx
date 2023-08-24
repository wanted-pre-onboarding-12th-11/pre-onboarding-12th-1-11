import {memo} from 'react';
import * as S from '../../styles/Auth.styled';

const AuthErrorMessage = memo(({message}: {message: string}) => {
    return <S.AuthErrorMessageStyled>{message}</S.AuthErrorMessageStyled>;
});

export default AuthErrorMessage;
