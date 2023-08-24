import { ChangeEvent } from 'react';

export interface InputProps {
  label: string;
  id: string;
  type: string;
  testid: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}