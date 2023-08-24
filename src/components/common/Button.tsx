// react import 
import { memo } from 'react';
// type, style import 
import { ButtonProps } from '../../types/AuthTypes';
import * as S from '../../styles/Common.styled';


export const Button = memo(({ type, testid, disabled, onClick }: ButtonProps) => {
  console.info('Button re-rendering');

  return (
    <S.ButtonStyled
      type='button'
      data-testid={testid}
      disabled={disabled}
      onClick={onClick}
    >
      {type}
    </S.ButtonStyled>
  )
})