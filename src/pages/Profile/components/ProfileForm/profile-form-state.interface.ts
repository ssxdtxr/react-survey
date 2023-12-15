export interface IProfileFormState {
  name: string;
  email: string;
  surname: string;
  phone: string;
  country: string;
  file: string;
}

export interface IFormItems {
  name: keyof IProfileFormState;
  title: string;
}
