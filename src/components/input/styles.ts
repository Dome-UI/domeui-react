import styled from 'styled-components'
import { ContainerStyleProps, InputStyleProps } from './types'
import { typograph as f } from '../../theme/typograph/typograph'

export const Container = styled.div<ContainerStyleProps>`
  display: flex;
  flex-direction: column;

  font-family: sans-serif;

  label {
    margin-left: 23px;

    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
  }
`

export const Content = styled.div`
  width: fit-content;
  position: relative;

  display: flex;
  flex-direction: column;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const Input = styled.input<InputStyleProps>`
  width: ${(props) => (props.props.fullWidth ? '100%' : 'fit-content')};

  ${(props) =>
    props.props.borderLineBottom
      ? 'border: none; border-bottom: 1px solid #98A2B3'
      : 'border: 1px solid #344054'};
  border-radius: ${(props) => props.props.borderRadius};
  padding: ${(props) => props.props.padding};
  padding-left: ${(props) => (props.props.iconInsideLeft ? '30px' : '')};
  padding-right: ${(props) => (props.props.iconInsideRight ? '30px' : '')};

  position: relative;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    outline-color: ${(props) => props.props.outlineColor};
    outline-width: 2px;
  }
`
