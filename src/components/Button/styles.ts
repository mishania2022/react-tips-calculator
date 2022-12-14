import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledButton = styled.button`
  width: 95%;
  height: 61px;
  background: ${Color.Blue};
  font-family: Noto Sans SC;
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: -0.30000001192092896px;
  text-align: center;
  color: #ffffff;
  border: 0px;

  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    cursor: pointer;
  }
  &:active {
    background: ${Color.LightBlue};
  }
`;

export { StyledButton };
