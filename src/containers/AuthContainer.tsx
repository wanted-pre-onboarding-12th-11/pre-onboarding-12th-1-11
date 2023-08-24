// component import
import {AuthTitle} from '../components/Auth/AuthTitle';
import {AuthInput} from '../components/Auth/AuthInput';
import Button from '../components/common/Button';
import {AuthFooter} from '../components/Auth/AuthFooter';
import * as S from '../styles/Auth.styled';

// custom hook, api, validation import
import useAuth from '../hooks/useAuth';

// library import
import {useEffect, useState} from 'react';

// constant data import
import {EMAIL_VALIDATION_MSG, PASSWORD_VALIDATION_MSG} from '../constants/message';

// types import
import {AuthPageProps} from '../types/AuthTypes';

export const AuthContainer = ({
    api,
    title,
    navigation,
    link,
    buttonType,
    footerType,
    testid,
    footerText,
    successMsg,
    errorMsg,
}: AuthPageProps) => {
    const {form, onChange, onSubmit, isSignValid} = useAuth({
        api,
        navigation,
        message: {success: successMsg, error: errorMsg},
    });

    const [errorMessage, setErrorMessage] = useState({
        emailError: '',
        passwordError: '',
    });

    useEffect(() => {
        const updatedErrorMessage = {
            ...errorMessage,
            emailError: form.email.isValid ? '' : EMAIL_VALIDATION_MSG,
            passwordError: form.password.isValid ? '' : PASSWORD_VALIDATION_MSG,
        };

        setErrorMessage(updatedErrorMessage);
    }, [form.email.isValid, form.password.isValid]);

    return (
        <S.AuthContainerStyled>
            <AuthTitle title={title} />
            <form onSubmit={onSubmit}>
                <AuthInput
                    email={form.email.value}
                    handleEmail={onChange}
                    password={form.password.value}
                    handlePassword={onChange}
                    errorMessage={errorMessage}
                />
                <Button type={'submit'} testid={testid} isDisabled={!isSignValid}>
                    {buttonType}
                </Button>
            </form>
            <AuthFooter text={footerText} type={footerType} route={link} />
        </S.AuthContainerStyled>
    );
};
