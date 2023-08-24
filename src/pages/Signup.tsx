import { SignupContainer } from '../containers/SignupContainer';
import * as S from '../styles/Auth.styled';

// 메타 태그 추가해야함

export const Signup = () => {
  return (
    <S.AuthPageStyled>
      <SignupContainer />
    </S.AuthPageStyled>
  )
}