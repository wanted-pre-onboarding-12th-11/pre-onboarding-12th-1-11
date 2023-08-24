import * as S from '../styles/Auth.styled';
import AuthContainer from '../containers/AuthContainer';
import MetaTag from '../components/SEO/MetaTag';
import {SIGNIN_PROPS} from '../constants/authProps';

const Signin = () => {
    return (
        <S.AuthPageStyled>
            <MetaTag title='로그인' description='11팀 로그인 페이지' />
            <AuthContainer {...SIGNIN_PROPS} />
        </S.AuthPageStyled>
    );
};

export default Signin;
