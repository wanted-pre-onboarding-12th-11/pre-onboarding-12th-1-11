import { memo } from 'react';
import { ButtonProps } from '../../types/AuthTypes';

export const Button = memo(({ type, testid, disabled, onClick }: ButtonProps) => {
  console.info('Button re-rendering');

  return (
    <button
      type='button'
      data-testid={testid}
      disabled={disabled}
      onClick={onClick}
    >
      {type}
    </button>
  )
})