import React from 'react'
import { ContainerIcon, Container } from './styles'
import { CardProps } from './types'
import * as iconSet from 'react-icons/fa'

import { position, border, shadow } from './theme'

export function SimpleCard(props: CardProps) {
  const align = position[props.positionTitle]
  const borderRadius = border[props.border]
  const boxShadow = shadow[props.shadow]

  const finalProps = {
    borderRadius,
    align,
    boxShadow,
    ...props,
  }

  const Icon =
    iconSet[props.icon] || iconSet[`Fa${props.icon}` as unknown as never]

  return (
    <Container props={finalProps} className="DUI-container-SimpleCard">
      {/* Icon */}
      {props.showIcon && (
        <ContainerIcon
          props={finalProps}
          className="DUI-containerIcon-SimpleCard"
          aria-hidden="true"
        >
          <Icon
            color={props.iconColor}
            fontSize="24px"
            className="DUI-icon-SimpleCard"
          />
        </ContainerIcon>
      )}
      {/* Title */}
      {props.title && <p className="DUI-title-SimpleCard">{props.title}</p>}
      {/* Description */}
      {props.description && (
        <span className="DUI-description-SimpleCard" role="contentinfo">
          {props.description}
        </span>
      )}
    </Container>
  )
}

SimpleCard.defaultProps = {
  fullWidth: false,
  border: 'small',
  shadow: 'default',
  showIcon: true,
  icon: 'ArrowUp',
  positionTitle: 'start',
  positionDescription: 'start',
  positionIcon: 'start',
}
