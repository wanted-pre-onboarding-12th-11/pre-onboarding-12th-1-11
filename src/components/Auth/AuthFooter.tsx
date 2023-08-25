// react, router import
import {memo} from 'react';
import {Link} from 'react-router-dom';
// style, type import
import * as S from '../../styles/Auth.styled';
import {AuthFooterProps} from '../../types/AuthTypes';

const AuthFooter = memo(({text, type, route}: AuthFooterProps) => {
    return (
        <S.AuthFooterStyled>
            <span>{text}</span>
            <Link to={route} className='link'>
                {type}
            </Link>
        </S.AuthFooterStyled>
    );
});

export default AuthFooter;
