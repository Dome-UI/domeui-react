import React from 'react'
import * as iconSet from 'react-icons/fa'
import { Container } from './styles'
import { ButtonProps } from './types'
import { buttonSize, border } from './theme'

export function Button(props: ButtonProps): JSX.Element {
  const borderRadius = border[props.border]
  const padding = buttonSize[props.buttonSize]

  const finalProps = {
    padding,
    borderRadius,
    ...props,
  }

  const [IconLeft, IconRight, IconCenter] = [
    iconSet[props.IconLeft] ||
      iconSet[`Fa${props.IconLeft}` as unknown as never],
    iconSet[props.IconRight] ||
      iconSet[`Fa${props.IconRight}` as unknown as never],
    iconSet[props.IconCenter] ||
      iconSet[`Fa${props.IconCenter}` as unknown as never],
  ]

  return (
    <Container props={finalProps} className="DUI-button">
      <>
        {props.IconCenter ? (
          <IconCenter className="DUI-iconCenter" />
        ) : (
          <>
            {props.IconLeft && <IconLeft className="DUI-iconLeft" />}
            {props.label}
            {props.IconRight && <IconRight className="DUI-iconRight" />}
          </>
        )}
      </>
    </Container>
  )
}

Button.defaultProps = {
  backgroundColor: '#F6BE27',
  color: '#242424',
  border: 'small',
  buttonSize: 'medium',
  fullWidth: false,
}
