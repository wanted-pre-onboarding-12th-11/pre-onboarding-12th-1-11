import { AuthFooterStyled } from '../../styles/Auth.styled';
import { Link } from 'react-router-dom';
import { memo } from 'react';

interface AuthFooterProps {
  text: string,
  type: string,
  route: string,
}
export const AuthFooter = memo(({ text, type, route }: AuthFooterProps) => {
  console.info('AuthFooter re-rendering');

  return (
    <AuthFooterStyled>
      <span>{text}</span>
      <Link to={route}>{type}</Link>
    </AuthFooterStyled>
  )
})