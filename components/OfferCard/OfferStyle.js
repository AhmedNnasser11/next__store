import styled from "styled-components";
import Image from "next/image"
import { Button } from "@mui/material"

export const CustomImage = styled(Image)`
    transition: .4s all linear;
    object-fit: contain;
`

export const OfferCardContainer = styled.div`
    background-color: #ebebeb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 40px;

    &:hover ${CustomImage}{
        transition: .4s all linear;
        transform: scale(1.1) rotate(1deg);
    }
`

export const Desc = styled.div`

`
export const Kind = styled.h2`
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.2;
    color: #f69d43;
`
export const Type = styled.h3`
padding: 5px 0;
text-transform: uppercase;
font-weight: 700;
font-size: 36px;
line-height: 40px;
color: #0a0d14;
`

export const Collection = styled.h4`
text-transform: uppercase;
font-size: 22px;
font-weight: 600;
color: #0a0d14;
`


export const CustomButton = styled(Button)`
    margin-top: 30px !important;
    width: 150px;
    height: 50px;
    background-color: #000;
    border: 1px solid #000;

    &:hover{
        background-color: #fff;
        color: #000;
    }
`