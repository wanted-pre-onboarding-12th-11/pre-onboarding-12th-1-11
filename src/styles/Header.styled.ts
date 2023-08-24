import {styled} from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    background-color: #ffffff;
    width: 100%;
    max-width: 480px;
    height: 70px;
    padding: 0 20px;
    margin: 0 auto;
    box-sizing: border-box;
    border-bottom: 1px solid #e1e2e3;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled(Link)`
    color: #36f;
    font-size: 30px;
    font-weight: 800;
    text-decoration: none;
    box-sizing: border-box;
    margin: 0;
`;

export const Menu = styled.div`
    a {
        padding: 10px;
        text-decoration: none;
        color: gray;
        font-size: 18px;
        font-weight: 600;
    }
    a.active {
        color: #36f;
    }
`;

export const LogoutButton = styled.div`
    font-size: 18px;
    font-weight: 400;
    color: gray;
    padding: 10px;
    cursor: pointer;
`;
