/* eslint-disable @typescript-eslint/ban-types */
import { HTMLAttributes, ReactNode } from 'react'
import {
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textDecoration,
} from './theme'

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  tag?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'strong'
    | 'i'
    | 'sub'
    | 'sup'
  fontSize?: keyof typeof fontSize
  fontWeight?: keyof typeof fontWeight
  lineHeight?: keyof typeof lineHeight
  letterSpacing?: keyof typeof letterSpacing
  textDecoration?: keyof typeof textDecoration
  color?: string
  styles?: {}
}
