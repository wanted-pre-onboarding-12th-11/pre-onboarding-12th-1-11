import styled from 'styled-components';
import Button from '../components/common/Button';

export const AuthPageStyled = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

export const AuthContainerStyled = styled.div`
    width: 300px;
    height: 374.44px;
`;

export const AuthTitleStyled = styled.div`
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 25.44px;
`;

export const AuthInputStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        color: var(--dark-gray);
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 6px;
    }

    input {
        padding: 14px 11px 13px 11px;
        border-radius: 5px;
        border: 1px solid var(--light-gray);
        background: var(--white);
    }

    input::placeholder {
        color: var(--dark-gray);
        font-size: 16px;
        font-weight: 400;
    }
`;
export const AuthErrorMessageStyled = styled.div`
    margin: 5px 0 20px 0;
    font-size: 12px;
    font-weight: 400;
    color: var(--red);
`;
export const AuthFooterStyled = styled.div`
    padding: 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    span {
        color: var(--dark-gray);
    }
    .link {
        color: var(--blue);
    }
`;

export const AuthButtonStyled = styled(Button)`
    margin: 10px 0;
    padding: 14.5px 120.4px 17.5px 120.6px;
    width: 300px;
    height: 50px;

    line-height: 170%;

    border: none;
    border-radius: 25px;

    background: var(--blue);
    color: var(--white);

    cursor: pointer;

    &:disabled {
        background: var(--light-gray);
        color: var(--dark-gray);
    }
`;
