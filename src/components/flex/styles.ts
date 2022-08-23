import styled from 'styled-components'
import { ContainerProps } from './types'

export const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.props.width ? props.props.width : '100%')};
  height: ${(props) => (props.props.height ? props.props.height : '100%')};
  display: flex;
  align-items: ${(props) => props.props.align};
  justify-content: ${(props) => props.props.justify};
  gap: ${(props) => props.props.gap}px;
  flex-wrap: ${(props) => props.props.wrap};
  flex-direction: ${(props) => props.props.direction};
`
