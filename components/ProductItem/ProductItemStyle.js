import styled from 'styled-components'
import Image from "next/image"
import {FavoriteBorder, CropFree, CompareArrows} from '@mui/icons-material';
import { IconButton, Button } from '@mui/material';


export const IconsContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 300ms linear;
`

export const ProductItemContainer = styled.div`
    background-color: #f1f1f1;
    position: relative;
    overflow: hidden;
      cursor: pointer;
    :hover ${IconsContainer}{
      top: 50px;
      opacity:1;
      transition: all 300ms linear;
    }
`

export const CustomImage = styled(Image)`
    object-fit: cover;
    width: 100%;
`

export const Info = styled.div`
z-index: 10;
display: flex;
flex-direction: column;
row-gap: 10px;
padding: 20px 15px 23px;
transition: all .3s ease 0s;
text-align: center;
background-color: #fff;
`

export const Title = styled.h2`
text-decoration: none;
color: #1d1d1d;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
display: block;
font-size: 16px;
transition: color .3s linear;
font-weight: 400;
cursor: pointer;
:hover{
    color: #F79837;
    transition: color .3s linear;
}
`

export const Price = styled.span`
color: #3f3f3f;
font-weight: 500;
font-size: 14px;
line-height: 1;
`
export const CustomHart = styled(FavoriteBorder)`
  color: #3c3c3c;
  transition: color 300ms linear;


`
export const CustomButtonIcon = styled(IconButton)`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #ffffff;
  transition: background-color .3s linear;
  :hover{
    transition: background-color .3s linear;
    background-color: #F79837;
  }
  :hover > *{
      color: #FFF;
      transition: color 300ms linear;
  }
  &.move{
      margin-top: 50px;
    }
`

export const CustomButton = styled(Button)`
  background-color: #FFF;
  width: 245px;
  height: 45px;
  box-shadow: none;
  :hover{
    background-color: #FFF;
  }

`
export const CustomCropFree = styled(CropFree)`

`

export const CustomCompareArrows = styled(CompareArrows)`
`
