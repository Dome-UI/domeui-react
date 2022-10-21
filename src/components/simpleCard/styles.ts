import styled from 'styled-components'
import { SimpleCardContainerStyleProps } from './types'
import { typograph as f } from '../../theme/typograph/typograph'

export const Container = styled.div<SimpleCardContainerStyleProps>`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  box-sizing: border-box;

  width: ${(props) => (props.props.fullWidth ? '100%' : 'fit-content')};
  max-width: ${(props) => (props.props.fullWidth ? 'auto' : '286px')};

  padding: 28px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: ${(props) => props.props.borderRadius};
  box-shadow: ${(props) => props.props.boxShadow};
  background: #1d2939;
  color: white;

  p {
    font-size: ${f.h4.fontSize};
    font-weight: ${f.h4.fontWeight.bold};
    line-height: ${f.h4.lineHeight};
  }

  span {
    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
  }

  ${(props) => props.props.styles};
`

export const ContainerIcon = styled.div`
  width: 100%;
  display: flex;
`
