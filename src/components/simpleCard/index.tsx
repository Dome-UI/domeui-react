import React, { ReactNode } from 'react'
import { ContainerIcon, Container } from './styles'
import {
  SimpleCardRootProps,
  SimpleCardIconProps,
  SimpleCardTitleProps,
  SimpleCardDescriptionProps,
} from './types'

import { border, shadow } from './theme'

function SimpleCardRoot({ children, ...props }: SimpleCardRootProps) {
  const borderRadius = border[props.border]
  const boxShadow = shadow[props.shadow]

  const finalProps = {
    borderRadius,
    boxShadow,
    ...props,
  }

  return (
    <Container props={finalProps} className="DUI-container-SimpleCard">
      {children}
    </Container>
  )
}

SimpleCardRoot.displayName = 'SimpleCard.Root'

function SimpleCardIcon({ children, ...props }: SimpleCardIconProps) {
  return (
    <ContainerIcon
      className="DUI-containerIcon-SimpleCard"
      aria-hidden="true"
      {...props}
    >
      {children}
    </ContainerIcon>
  )
}

SimpleCardIcon.displayName = 'SimpleCard.Icon'

function SimpleCardTitle({ children }: SimpleCardTitleProps) {
  return <p className="DUI-title-SimpleCard">{children}</p>
}

SimpleCardTitle.displayName = 'SimpleCard.Title'

function SimpleCardDescription({ children }: SimpleCardDescriptionProps) {
  return (
    <span className="DUI-description-SimpleCard" role="contentinfo">
      {children}
    </span>
  )
}

SimpleCardDescription.displayName = 'SimpleCard.Description'

export const SimpleCard = {
  Root: SimpleCardRoot,
  Title: SimpleCardTitle,
  Description: SimpleCardDescription,
  Icon: SimpleCardIcon,
}
