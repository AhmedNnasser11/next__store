import styled from "styled-components";
import { Container } from "@mui/material";

export const LayoutContainer = styled.section`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: ${props => props.bg ? props.bg : '#FFF'};
`
export const Title = styled.h2`
    color: #0a0d14;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
`

export const Description = styled.p`
    padding-top: 10px;
    font-size: 16px;
    line-height: 24px;
    color: #777c87;
    font-weight: 400;
    text-align: center;
`

export const CustomContainer = styled(Container)`
    
`