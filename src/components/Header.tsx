import {NavLink, useNavigate} from 'react-router-dom';
import * as S from '../styles/Header.styled';

const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('accessToken');
        navigate('/signin');
    };

    const user = localStorage.getItem('accessToken');

    return (
        <S.Container>
            <S.Logo to='/todo'>TODO</S.Logo>
            <S.Menu>
                {user ? (
                    <S.LogoutButton onClick={logout}>로그아웃</S.LogoutButton>
                ) : (
                    <>
                        <NavLink
                            to={'/signup'}
                            className={({isActive}) => (isActive ? 'active' : '')}
                        >
                            회원가입
                        </NavLink>
                        <NavLink
                            to={'/signin'}
                            className={({isActive}) => (isActive ? 'active' : '')}
                        >
                            로그인
                        </NavLink>
                    </>
                )}
            </S.Menu>
        </S.Container>
    );
};

export default Header;
