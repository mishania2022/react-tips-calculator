import Select, { SingleValue } from "react-select";
import { IOption } from "../../ui/types";
import { CustomStyles } from "./styles";

export const options: IOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

interface IProps {
  onChange: (tipsValue: IOption) => void;
  tipsValue: IOption;
}

export const CustomSelect = ({ tipsValue, onChange }: IProps) => {
  const handleTipsValue = (tipsValue: SingleValue<IOption>): void => {
    if (tipsValue) onChange(tipsValue);
  };

  return (
    <Select
      onChange={handleTipsValue}
      value={tipsValue}
      options={options}
      styles={CustomStyles}
      isSearchable={false}
      isMulti={false}
    />
  );
};
