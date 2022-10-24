import styled from 'styled-components'
import { ContainerProps } from './types'
import { typograph as f } from '../../theme/typograph/typograph'

export const Container = styled.div<ContainerProps>`
  background-color: #eeebff;
  width: fit-content;
  max-width: 380px;
  border-radius: ${(props) => props.border};
  box-shadow: ${(props) => props.shadow};

  overflow: hidden;
`

export const Image = styled.img`
  display: block;
  max-height: 190px;
  width: 100%;
`

export const Header = styled.header`
  padding: 20px;

  display: flex;
  align-items: center;
  gap: 20px;
`

export const Title = styled.p`
  width: 100%;
  font-size: ${f.paragraphSmall.fontSize};
  font-weight: ${f.paragraphSmall.fontWeight.bold};
  text-align: center;
`

export const Description = styled.footer`
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    font-size: ${f.caption.fontSize};
    line-height: ${f.caption.lineHeight};
  }

  button {
    width: fit-content;

    padding: 0;
    margin: 0;
    
    align-self: flex-end;

    line-height: ${f.paragraphSmall.fontSize};
    font-weight: ${f.paragraphSmall.fontWeight.bold};

    background: transparent;
    border: none;
  }
`
