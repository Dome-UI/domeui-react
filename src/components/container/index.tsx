import React from 'react'
import { ContainerStyled } from './styles'
import { ContainerProps } from "./types"

export function SectionContainer(props: ContainerProps): JSX.Element {
  return (
    <ContainerStyled props={props}>
      {props.boxesExemple && (
        <>
          <div>Example</div>
          <div>Example</div>
          <div>Example</div>
        </>
      )}
    </ContainerStyled>
  )
}

SectionContainer.defaultProps = {
  boxesExemple: false,
  background: "#ffffff",
  height: "fit-content",
  paddingMobile: "20px 40px",
  paddingDesktop: "5% 80px",
  paddingBreakpointMobileToDesktop: 1024,
  flexDirection: "column",
  align: "center",
  justify: "center",
  gap: "16",
};
