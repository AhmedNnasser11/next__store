import styled from "styled-components";
import Image from "next/image";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const CustomImg = styled(Image)`
  object-fit: cover;
  transition: all .4s ease;
`;

export const Item = styled.div`

:hover ${CustomImg} {
  transform: scale(1.1) rotate(1deg);
  transition: all .3s ease;
}
`;
export const Info = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 13px;
`;


export const Date = styled.span`
  font-size: 16px;
  color: #f79837;
  font-weight: 600;
`;

export const Title = styled.h3`
  line-height: 32px;
  font-size: 22px;
  font-weight: 600;
  color: #0a0d14;
`;

export const Article = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #777c87;
  font-weight: 400;
`;
export const CustomButton = styled(Button)`
  background-color: #fff;
  color: #000;
  width: 170px;
  height: 40px;
  border: 1px solid #000;
  font-size: 16px;
  font-weight: 600;
  :hover {
    color: #f79837;
    border-color: #f79837;
    background-color: #fff;
  }
`;
export const CustomSendIcon = styled(SendIcon)``;
