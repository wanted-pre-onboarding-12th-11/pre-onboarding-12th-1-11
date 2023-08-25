import {AuthTitleStyled} from '../../styles/Auth.styled';
import {memo} from 'react';

const AuthTitle = memo(({title}: {title: string}) => {
    return (
        <AuthTitleStyled>
            <h1>{title}</h1>
        </AuthTitleStyled>
    );
});

export default AuthTitle;
