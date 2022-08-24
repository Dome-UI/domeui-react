/* eslint-disable @typescript-eslint/ban-types */
import { HTMLAttributes } from 'react'
import { align, direction, justify } from './theme'

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction: keyof typeof direction
  align: keyof typeof align
  justify: keyof typeof justify
  gap?: number
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'

  width?: string
  height?: string

  stringExemple: boolean
  children: JSX.Element | JSX.Element[]
  styles?: {}
}

export interface ContainerProps {
  props: {
    width?: string
    height?: string
    direction: keyof typeof direction
    align: keyof typeof align
    justify: keyof typeof justify
    gap?: number
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  }
}
