import * as Api from './';
import API_KEY from '../constants/apiKey';
import {AuthRequestProps} from '../types/AuthTypes';

const AUTH_PATH = '/auth';

export const postSignIn = async ({email, password}: AuthRequestProps) => {
    const response = await Api.post(API_KEY, `${AUTH_PATH}/signin`, {email, password}, false);
    return response;
};

export const postSignUp = async ({email, password}: AuthRequestProps) => {
    const response = await Api.post(API_KEY, `${AUTH_PATH}/signup`, {email, password}, false);
    return response;
};
