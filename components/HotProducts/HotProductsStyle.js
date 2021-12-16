import styled from "styled-components"
import {Container} from "@mui/material"

export const CustomContainer = styled(Container)`
    margin-top: 25px;
  .MuiTabs-flexContainer{
    justify-content: center;
    column-gap: 10px;
  }
  .MuiTabs-indicator{
    background-color: #f79837;
  
  }
  .MuiButtonBase-root{
    color: #0a0d14;
    font-size: 1rem !important;
    font-weight: 500;
    text-transform: uppercase;
    &:hover{
        color: #f79837;
    }
  }
  .Mui-selected{
    color: #f79837;
  }
`
export const TabContainer = styled.div`
    text-align: center;
`