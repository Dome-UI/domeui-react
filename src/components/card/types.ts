import { HTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react'
import { positionTitle, border, shadow } from './theme'

export interface CardRootProps {
  children?: ReactNode

  border?: keyof typeof border
  shadow?: keyof typeof shadow
}

export interface CardHeaderProps {
  children?: ReactNode
}

export interface CardIconProps {
  children?: ReactNode
}

export interface CardTitleProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: string
}

export interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  url?: string
  alt?: string
}

export interface CardDescriptionProps {
  children?: ReactNode
}

export interface ContainerProps {
  border?: string
  shadow?: string
}
