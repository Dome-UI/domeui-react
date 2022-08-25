import styled from "styled-components"
import { ContainerStylesProps } from "./types";


export const ContainerStyled = styled.section<ContainerStylesProps>`
    align-items: ${(props) => props.props.align};
    background: ${(props) => props.props.background};
    box-sizing: border-box;
    display: flex;
    flex-direction: ${(props) => props.props.flexDirection};
    gap: ${(props) => props.props.gap}px;
    height: ${(props) => props.props.height};
    justify-content: ${(props) => props.props.justify};
    width: 100%;
    ${(props) => props.props.styles}
    
    padding: ${(props) => props.props.paddingMobile};


    @media screen and (min-width: ${(props) => props.props.paddingBreakpointMobileToDesktop}px){
        padding: ${(props) => props.props.paddingDesktop};
    }

    div{
        align-items: center;
        background: wheat;
        display: flex;
        height: 50px;
        justify-content: center;
        width: 100%;
    }
`