import styled from "styled-components";
import { Button, Container } from "@mui/material";
import Image from "next/image";

export const HeaderSection = styled.header`
  width: 100%;
  height: 80vh;
  background-color: #f79837;
  overflow: hidden;
`;

export const CustomContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CustomImage = styled(Image)`
  margin-bottom: 50px !important;
  @media (max-width: 750px) {
    visibility: hidden;
}
`;

export const CustomMain = styled.main`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;


  h1 {
    font-size: 120px;
    text-transform: uppercase;
    font-weight: 100 !important;
    line-height: 150px;
    & > span {
      color: #f3f3f3;
      font-weight: bold;
    }
  }
  & > span {
    font-weight: 500;
    font-size: 24px;
    color: #f3f3f3;
  }
  @media (max-width: 750px) {
    h1{
      font-size: 80px;
      line-height: 100px;
    }
  }
`;

export const CustomButton = styled(Button)`
  margin-top: 40px !important;
  width: 150px;
  height: 50px;
  background-color: #000;
  border: 1px solid #000;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
