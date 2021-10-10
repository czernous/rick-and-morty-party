import { InputField } from "./InputStyles";

const Input = ({ placeholder, ...props }: any) => (
  <InputField placeholder={placeholder} {...props} />
);

export default Input;
