/* eslint-disable @typescript-eslint/ban-types */
import { ReactNode } from 'react'
import { position, border, shadow } from './theme'

export interface SimpleCardRootProps {
  children: ReactNode

  border: keyof typeof border
  shadow: keyof typeof shadow

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

export interface ContainerProps {
  props: {
    fullWidth?: boolean
    borderRadius?: string
    boxShadow?: string
    styles?: {}
  }
}
