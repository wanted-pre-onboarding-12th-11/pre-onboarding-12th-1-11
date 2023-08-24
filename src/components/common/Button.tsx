interface ButtonProps {
  type: string;
  testid: string;
  disabled?: boolean;
  onClick: () => Promise<void> | void;
}

export const Button = ({ type, testid, disabled, onClick }: ButtonProps) => {
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
}