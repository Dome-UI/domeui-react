import React from 'react'
import { Input as InputContainer, Container, Content, Flex } from './styles'
import { border as borderTheme, inputSize as sizeTheme } from './theme'
import { InputProps } from './types'
import * as iconSet from 'react-icons/fa'

export function Input(props: InputProps) {
  const borderRadius = borderTheme[props.border]
  const padding = sizeTheme[props.inputSize]

  const [IconOutsideLeft, IconOutsideRight, IconInsideLeft, IconInsideRight] = [
    iconSet[props.iconOutsideLeft] ||
      iconSet[`Fa${props.iconOutsideLeft}` as unknown as never],
    iconSet[props.iconOutsideRight] ||
      iconSet[`Fa${props.iconOutsideRight}` as unknown as never],
    iconSet[props.iconInsideLeft] ||
      iconSet[`Fa${props.iconInsideLeft}` as unknown as never],
    iconSet[props.iconInsideRight] ||
      iconSet[`Fa${props.iconInsideRight}` as unknown as never],
  ]

  const finalProps = {
    borderRadius,
    padding,
    ...props,
  }

  return (
    <>
      {props.iconInsideLeft ||
      props.iconInsideRight ||
      props.iconOutsideLeft ||
      props.iconOutsideRight ? (
        <Container props={finalProps} className="DUI-containerInput">
          {props.label && <label className="DUI-label">{props.label}</label>}
          <Flex className="DUI-flexInput">
            {props.iconOutsideLeft && (
              <IconOutsideLeft
                color={props.iconOutsideLeftColor}
                className="DUI-iconOutsideLeft"
              />
            )}
            <Content>
              {props.iconInsideLeft && (
                <IconInsideLeft
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '30%',
                    zIndex: '2',
                  }}
                  color={props.iconInsideLeftColor}
                  className="DUI-iconInsideLeft"
                />
              )}
              <InputContainer
                props={finalProps}
                type={props.type}
                placeholder={props.textPlaceholder && props.textPlaceholder}
                className="DUI-containerInput"
              />
              {props.iconInsideRight && (
                <IconInsideRight
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '30%',
                    zIndex: '2',
                  }}
                  color={props.iconInsideRightColor}
                  className="DUI-iconInsideRight"
                />
              )}
            </Content>
            {props.iconOutsideRight && (
              <IconOutsideRight
                color={props.iconOutsideRightColor}
                className="DUI-iconOutsideRight"
              />
            )}
          </Flex>
        </Container>
      ) : (
        <Container props={finalProps} className="DUI-containerInput">
          {props.label && (
            <label style={{ marginLeft: '15px' }} className="DUI-label">
              {props.label}
            </label>
          )}
          <InputContainer
            props={finalProps}
            type={props.type}
            placeholder={props.textPlaceholder && props.textPlaceholder}
            className="DUI-containerInput"
          />
        </Container>
      )}
    </>
  )
}

Input.defaultProps = {
  inputSize: 'medium',
  border: 'small',
  outlineColor: '#F6BE27',
  textPlaceholder: 'Placeholder',
  fullWidth: false,
}
