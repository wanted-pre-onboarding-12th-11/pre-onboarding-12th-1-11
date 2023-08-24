import {AxiosResponse} from 'axios';
import {ChangeEvent} from 'react';

export type AuthAPI = ({email, password}: AuthRequestProps) => Promise<AxiosResponse>;

export interface AuthPageProps {
    api: AuthAPI;
    title: string;
    navigation: string;
    link: string;
    buttonType: string;
    footerType: string;
    testid: string;
    footerText: string;
}

export interface AuthFooterProps {
    text: string;
    type: string;
    route: string;
}

export interface AuthInputProps {
    email: string;
    handleEmail: (e: ChangeEvent<HTMLInputElement>) => void;
    password: string;
    handlePassword: (e: ChangeEvent<HTMLInputElement>) => void;
    errorMessage: {
        emailError: string;
        passwordError: string;
    };
}

export interface AuthRequestProps {
    email: string;
    password: string;
}
