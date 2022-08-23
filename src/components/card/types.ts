import * as iconSet from 'react-icons/fa'
import { positionTitle, border, shadow } from './theme'

export interface CardProps {
  title?: string
  positionTitle?: keyof typeof positionTitle
  imageUrl?: string
  backgroundColor?: string
  border?: keyof typeof border
  shadow?: keyof typeof shadow

  buttonLeftTitle?: keyof typeof iconSet
  buttonLeftTitleHref?: string
  buttonLeftTitleColor?: string

  buttonRightTitle?: keyof typeof iconSet
  buttonRightTitleHref?: string
  buttonRightTitleColor?: string

  buttonLeftDescription?: keyof typeof iconSet
  buttonLeftDescriptionHref?: string
  buttonLeftDescriptionColor?: string

  buttonRightDescription?: keyof typeof iconSet
  buttonRightDescriptionHref?: string
  buttonRightDescriptionColor?: string

  buttonReadMore?: boolean
  descriptionText?: string
  description?: boolean
  styles?: {}
}

export interface ContainerProps {
  descriptionVisible?: boolean
  props: {
    backgroundColor?: string
    borderRadius?: string
    boxShadow?: string
    styles?: {}
  }
}

export interface HeaderProps {
  props: {
    textAlign?: string
  }
}
