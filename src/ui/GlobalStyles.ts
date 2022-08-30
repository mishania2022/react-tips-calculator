import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";

export const GlobalStyles = createGlobalStyle`
*{margin:0px;
padding:0px;
box-sizing:0px;
font-family:Arial, Helvetica, sans-serif;}

body{
    background:${Color.LightBlue};
}
`;
