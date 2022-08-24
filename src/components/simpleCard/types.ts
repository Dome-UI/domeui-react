/* eslint-disable @typescript-eslint/ban-types */
import { HTMLAttributes } from 'react'
import * as iconSet from 'react-icons/fa'
import { position, border, shadow } from './theme'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  positionTitle: keyof typeof position

  border: keyof typeof border
  shadow: keyof typeof shadow

  showIcon?: boolean
  icon: keyof typeof iconSet
  iconColor?: string
  positionIcon?: keyof typeof position

  description?: string
  positionDescription?: keyof typeof position

  fullWidth?: boolean
  styles?: {}
}

export interface ContainerProps {
  props: {
    fullWidth?: boolean
    borderRadius?: string
    boxShadow?: string
    positionTitle?: keyof typeof position
    positionDescription?: keyof typeof position
    styles?: {}
  }
}

export interface ContainerIconProps {
  props: {
    positionIcon?: keyof typeof position
  }
}
