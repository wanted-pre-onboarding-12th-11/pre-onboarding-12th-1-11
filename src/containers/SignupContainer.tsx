// component import 
import { AuthInput } from '../components/Auth/AuthInput';
import { Button } from '../components/common/Button';
import { AuthTitle } from '../components/Auth/AuthTitle';
import { AuthFooter } from '../components/Auth/AuthFooter';
import { SignupContainerStyled } from '../styles/Auth.styled';

// custom hook, api, validation import 
import { useInput } from '../hooks/useInput';
import { signupAPI } from '../apis/signApi';
import { emailValidation, passwordValidation } from '../utils/validation';

// library import 
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// constant data import 
import ROUTES from '../constants/routes';


export const SignupContainer = () => {
  const navigate = useNavigate();

  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');

  // 최적화된 검증 함수 사용
  const isEmailValid = useMemo(() => emailValidation(email), [email]);
  const isPasswordValid = useMemo(() => passwordValidation(password), [password]);

  // 이벤트 핸들러 메모이제이션
  const memoizedHandleSubmit = useMemo(() => async () => {
    await signupAPI(email, password);
    navigate(ROUTES.TODO);
  }, []);

  return (
    <SignupContainerStyled>
      <AuthTitle title='회원가입' />
      <form>
        <AuthInput
          email={email}
          handleEmail={handleEmail}
          password={password}
          handlePassword={handlePassword} />
        <Button
          type='가입하기'
          testid='signup-button'
          disabled={!isPasswordValid || !isEmailValid}
          onClick={memoizedHandleSubmit} />
      </form>
      <AuthFooter
        text='이미 가입하셨나요?'
        type='로그인'
        route={ROUTES.SIGNIN}
      />
    </SignupContainerStyled>

  )
}