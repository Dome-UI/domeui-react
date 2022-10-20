import React from 'react'
import { Slot } from '@radix-ui/react-slot';

import { ButtonRootProps, ButtonIconProps } from './types'
import { buttonSize, border } from './theme'

import { Container } from './styles'

function ButtonRoot(props: ButtonRootProps): JSX.Element {
  const borderRadius = border[props.border]
  const padding = buttonSize[props.buttonSize]

  const finalProps = {
    padding,
    borderRadius,
    ...props,
  }

  return (
    <Container
      props={finalProps}
      className="DUI-button"
      role="button"
      {...props}
    >
      {props.children}
    </Container>
  )
}

ButtonRoot.displayName = 'Button.Root'

function ButtonIcon({ children }: ButtonIconProps) {
  return <Slot>{children}</Slot>
}

ButtonIcon.displayName = 'Button.Icon'

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
}
