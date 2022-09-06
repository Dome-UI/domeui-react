import React from 'react'
import { TextProps } from './types'
import {
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
  textDecoration,
} from './theme'

export function Text(props: TextProps): JSX.Element {
  const FinalTag = props.tag || 'p'

  const [
    finalFontSize,
    finalFontWeight,
    finalLineHeight,
    finalLetterSpacing,
    finalTextDecoration,
  ] = [
    fontSize[props.fontSize],
    fontWeight[props.fontWeight],
    lineHeight[props.lineHeight],
    letterSpacing[props.letterSpacing],
    textDecoration[props.textDecoration],
  ]

  return (
    <FinalTag
      className="DUI-text"
      role="contentinfo"
      style={{
        fontSize: finalFontSize,
        fontWeight: finalFontWeight,
        lineHeight: finalLineHeight,
        letterSpacing: finalLetterSpacing,
        textDecoration: finalTextDecoration,
        color: props.color,
        fontFamily: 'sans-serif',
        ...props.styles,
      }}
    >
      {props.label}
    </FinalTag>
  )
}

Text.defaultProps = {
  fontSize: 'md',
  fontWeight: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textDecoration: 'none',
  tag: 'p',
}
