import { StylesConfig } from "react-select";
import { IOption } from "../../ui/types";

export const CustomStyles: StylesConfig<IOption> = {
  container: (styles) => ({
    ...styles,
    width: "95%",
    marginBottom: "45px",
  }),
  valueContainer: (styles) => ({
    ...styles,
    textAlign: "center",
  }),
  singleValue: (styles) => ({
    ...styles,
    marginLeft:"40px"
  }),
  menuList: (styles) => ({
    ...styles,    
  }),

  option: (styles) => ({
    ...styles,
    color: "black",
    textAlign: "center",
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: "30px",
    padding: "15px",
    border: "none",
  }),

  indicatorSeparator: () => ({
    width: 0,
  }),
};
