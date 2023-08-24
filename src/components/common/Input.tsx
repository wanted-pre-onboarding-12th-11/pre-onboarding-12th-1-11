import { ChangeEvent } from 'react';

interface InputProps {
  id: string;
  type: string;
  testid: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ testid, id, type, placeholder, value, onChange }: InputProps) => {

  return (
    <div className='input'>
      <label htmlFor={id} />
      <input
        id={id}
        type={type}
        data-testid={testid}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}