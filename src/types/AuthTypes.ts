import { AxiosResponse } from 'axios';

export interface AuthPageProps {
  api: (email: string, password: string) => Promise<AxiosResponse<any, any> | undefined>,
  title: string,
  navigation: string,
  link: string,
  buttonType: string,
  footerType: string,
  testid: string,
  footerText: string,
}

export interface ButtonProps {
  type: string;
  testid: string;
  disabled?: boolean;
  onClick: () => Promise<void> | void;
}

export interface AuthFooterProps {
  text: string,
  type: string,
  route: string,
}