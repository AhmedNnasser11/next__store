import styled from "styled-components"
import { Container } from "@mui/material"
import { Menu } from "@mui/icons-material"

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #FEF5EF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu{
      @media (min-width: 750px){
        display: none;
      }
    }

`
export const CustomContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.h3`
    font-weight: 700;
    font-size: 25px;
    color: #f79837;
`

export const UList = styled.ul`
    height: 80px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-grow: .5;
    @media (max-width: 750px){
      display: none;
    }
`

export const LItem = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const AnchorName = styled.a`
    color: #24262b;
    font-size: 14px;
    line-height: 30px;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: color 200ms linear;
    &:hover{
        color: #f79837;
        transition: color 200ms linear;
    }
`

export const Icons = styled.div`
    display: flex;
    flex-grow: .1;
    justify-content: space-between;
    align-items: center;

    & > * {
        cursor: pointer;
        transition: color 200ms linear;
        &:hover{
            color: #f79837;
            transition: color 200ms linear;
        }
    }
`

export const CustomMenu = styled(Menu)`

`
