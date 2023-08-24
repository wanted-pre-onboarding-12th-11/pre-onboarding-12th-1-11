import Input from '../common/Input';
import AuthErrorMessage from './AuthErrorMessage';
import {AuthInputProps} from '../../types/AuthTypes';

export const AuthInput = ({
    email,
    handleEmail,
    password,
    handlePassword,
    errorMessage,
}: AuthInputProps) => {
    return (
        <div>
            <Input
                label='이메일'
                id='email'
                type='text'
                testid='email-input'
                placeholder='이메일을 입력해주세요.'
                value={email}
                onChange={handleEmail}
            />
            <AuthErrorMessage message={email === '' ? '' : errorMessage.emailError} />
            <Input
                label='비밀번호'
                id='password'
                type='password'
                testid='password-input'
                placeholder='비밀번호를 입력해주세요.'
                value={password}
                onChange={handlePassword}
            />
            <AuthErrorMessage message={password === '' ? '' : errorMessage.passwordError} />
        </div>
    );
};

export default AuthInput;
