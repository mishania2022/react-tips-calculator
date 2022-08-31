import { FormEvent, useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { IOption } from "../../ui/types";
import { Button } from "../Button/Button";
import { CustomSelect, options } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { Description, StyledForm, Title, Total } from "./StyledForm";

export const Form = () => {
  const bill = useInput();
  const persons = useInput();
  const [tipsValue, setTipsValue] = useState<IOption>(options[0]);
  const [total, setTotal] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const total =
      (+bill.value * (100 + tipsValue.value)) / 100 / +persons.value;
    setTotal(total);
  };

  useEffect((): void => {
    bill.value && persons.value ? setIsDisabled(false) : setIsDisabled(true);
  }, [bill.value, persons.value]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Description>Let’s go calculate your tips</Description>
      <Input placeholder="Enter bill" typeInput="number" {...bill} />
      <Input placeholder="Enter  persons" typeInput="number" {...persons} />
      <CustomSelect tipsValue={tipsValue} onChange={setTipsValue} />
      <Total>Total: {total.toFixed(2)}$</Total>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};
