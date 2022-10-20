/* eslint-disable @typescript-eslint/ban-types */
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { buttonSize, border } from './theme'

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string
  color?: string
  fullWidth?: boolean
  fullHeight?: boolean
  hoverColor?: string
  clickColor?: string
  buttonSize?: keyof typeof buttonSize
  border?: keyof typeof border
  styles?: {}
  children: ReactNode;
}

export interface ButtonIconProps {
  children: ReactNode
}

export interface ButtonStylesProps {
  props: {
    backgroundColor?: string
    color?: string
    fullWidth?: boolean
    fullHeight?: boolean
    hoverColor?: string
    clickColor?: string
    styles?: {}
    padding?: string
    borderRadius?: string
  }
}
