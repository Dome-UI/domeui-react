import styled from 'styled-components'
import { ButtonStylesProps } from './types'

export const Container = styled.button<ButtonStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background: ${(props) => props.props.backgroundColor};
  width: ${(props) => (props.props.fullWidth ? '100%' : 'auto')};
  height: ${(props) => (props.props.fullHeight ? '100%' : 'auto')};
  color: ${(props) => props.props.color};

  padding: ${(props) => props.props.padding};
  border-radius: ${(props) => props.props.borderRadius};

  transition: all 0.2s;
  cursor: pointer;
  border: none;

  ${(props) => props.props.styles}

  :hover {
    ${(props) =>
      props.props.hoverColor
        ? `background: ${props.props.hoverColor}`
        : 'filter: brightness(0.9)'};
  }

  :active {
    ${(props) =>
      props.props.clickColor
        ? `background: ${props.props.clickColor}`
        : 'filter: brightness(0.7)'};
  }
`
