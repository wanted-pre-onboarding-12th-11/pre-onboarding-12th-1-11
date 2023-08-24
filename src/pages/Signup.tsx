import * as S from '../styles/Auth.styled';
import AuthContainer from '../containers/AuthContainer';
import MetaTag from '../components/SEO/MetaTag';
import {SIGNUP_PROPS} from '../constants/authProps';

export const Signup = () => {
    document.title = SIGNUP_PROPS.title;

    return (
        <S.AuthPageStyled>
            <MetaTag title='회원가입' description='11팀 회원가입 페이지' />
            <AuthContainer {...SIGNUP_PROPS} />
        </S.AuthPageStyled>
    );
};

export default Signup;
