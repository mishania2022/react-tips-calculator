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
  menuList: (styles) => ({
    ...styles,
    background: "yellow",
  }),

  option: (styles) => ({
    ...styles,
    color: "black",
    textAlign: "center",
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: "30px",
    // background: Color.White,
    padding: "15px",
    border: "none",
  }),

  indicatorSeparator: () => ({
    width: 0,
  }),
};
