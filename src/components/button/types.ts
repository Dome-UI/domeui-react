/* eslint-disable @typescript-eslint/ban-types */
import { HTMLAttributes } from 'react'
import * as iconSet from 'react-icons/fa'
import { buttonSize, border } from './theme'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string
  backgroundColor?: string
  color?: string
  fullWidth?: boolean
  fullHeight?: boolean
  hoverColor?: string
  clickColor?: string
  buttonSize: keyof typeof buttonSize
  border: keyof typeof border
  styles?: {}
  IconLeft: keyof typeof iconSet
  IconRight: keyof typeof iconSet
  IconCenter: keyof typeof iconSet
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
    padding: string
    borderRadius: string
  }
}
