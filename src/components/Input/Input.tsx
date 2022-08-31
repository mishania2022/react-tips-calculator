import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  typeInput: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, typeInput, value, onChange }: IProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={typeInput}
      value={value}
      onChange={onChange}
    ></StyledInput>
  );
};
