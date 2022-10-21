/* eslint-disable @typescript-eslint/ban-types */
import { HTMLAttributes, ReactNode } from 'react'
import { position, border, shadow } from './theme'

export interface SimpleCardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode

  border?: keyof typeof border
  shadow?: keyof typeof shadow

  positionIcon?: keyof typeof position

  fullWidth?: boolean
  styles?: {}
}

export interface SimpleCardIconProps {
  children: ReactNode
}

export interface SimpleCardTitleProps {
  children: ReactNode
}

export interface SimpleCardDescriptionProps {
  children: ReactNode
}

export interface SimpleCardContainerStyleProps {
  props: {
    fullWidth?: boolean
    borderRadius?: string
    boxShadow?: string
    styles?: {}

    positionIcon?: string
  }
}
