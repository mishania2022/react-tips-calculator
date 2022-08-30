import styled from "styled-components";
import { Color } from "./colors";
import circles from "../assets/circles.svg";
import { Media } from "./media";

const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 200px;
  max-width: 1512px;
  min-height: 100vh;
  background: ${Color.GrayLight} no-repeat url(${circles});

  ${Media.MD} {
    max-width: 744px;
    padding: 190px 0px;
  }

  ${Media.SM} {
    margin-top: 0px;
    max-width: 390px;
    padding: 100px 0px 90px;
  }
`;

export { Wrapper };
