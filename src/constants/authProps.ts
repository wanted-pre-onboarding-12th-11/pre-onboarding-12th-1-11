import ROUTES from '../constants/routes';
import {postSignIn, postSignUp} from '../apis/Auth';
import * as M from './message';

export const SIGNIN_PROPS = {
    api: postSignIn,
    title: '로그인',
    navigation: ROUTES.TODO,
    link: ROUTES.SIGNUP,
    buttonType: '로그인',
    footerType: '회원가입',
    testid: 'signin-button',
    footerText: '아직 회원이 아니신가요?',
    successMsg: M.SIGNIN_SUCCESS,
    errorMsg: M.SIGNIN_FAILED,
};

export const SIGNUP_PROPS = {
    api: postSignUp,
    title: '회원가입',
    navigation: ROUTES.SIGNIN,
    link: ROUTES.SIGNIN,
    buttonType: '가입하기',
    footerType: '로그인',
    testid: 'signup-button',
    footerText: '이미 가입하셨나요?',
    successMsg: M.SIGNUP_SUCCESS,
    errorMsg: M.SIGNUP_FAILED,
};
