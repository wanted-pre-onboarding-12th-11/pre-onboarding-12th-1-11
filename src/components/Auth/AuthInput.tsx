import { Input } from '../common/Input';
import * as S from '../../styles/Auth.styled';
import { ChangeEvent } from 'react';
import { AuthErrorMessage } from './AuthErrorMessage';

interface AuthInputProps {
  email: string,
  handleEmail: (e: ChangeEvent<HTMLInputElement>) => void,
  password: string,
  handlePassword: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const AuthInput = ({
  email,
  handleEmail,
  password,
  handlePassword
}: AuthInputProps) => {

  console.info('AuthInput re-rendering');

  return (
    <S.AuthInputStyled>
      <Input
        id='eamil'
        type='text'
        testid='email-input'
        placeholder='user@wanted.com'
        value={email}
        onChange={handleEmail}
      />
      <AuthErrorMessage message='message' />
      <Input
        id='password'
        type='password'
        testid='password-input'
        placeholder='********'
        value={password}
        onChange={handlePassword}
      />
      <AuthErrorMessage message='message' />
    </S.AuthInputStyled>
  )
}