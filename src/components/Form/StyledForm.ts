import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

const StyledForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;

  ${Media.MD} {
    max-width: 330px;
  }
`;

const Title = styled.h1`
  margin-bottom: 45px;
  font-family: "Nota Sans SC";
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  text-align: center;
  letter-spacing: -0.3px;

  ${Media.MD} {
    font-size: 24px;
  }
`;

const Description = styled.p`
  margin-bottom: 45px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${Color.GrayFont};

  ${Media.MD} {
    font-size: 24px;
  }
`;

const Total = styled.div`
  width: 133px;
  height: 35px;
  font-family: "Noto Sans SC";
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.3px;
  color: #000000;
  text-align: right;
  align-self: flex-start;
  margin-bottom: 45px;

  ${Media.MD} {
    font-size: 24px;
  }

  ${Media.SM} {
    font-size: 18px;
  }
`;
export { StyledForm, Title, Description, Total };
