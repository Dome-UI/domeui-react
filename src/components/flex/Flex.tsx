import React from 'react'
import { FlexProps } from './types'
import { Container } from './styles'

export function Flex(props: FlexProps) {
  return (
    <Container props={props} className="DUI-container-flex">
      {props.stringExemple && (
        <>
          <h1>Exemple</h1>
          <h1>Exemple</h1>
          <h1>Exemple</h1>
        </>
      )}
      {props.children}
    </Container>
  )
}

Flex.defaultProps = {
  wrap: 'nowrap',
  gap: '0',
  direction: 'row',
  align: 'start',
  justify: 'start',
  width: '0',
  height: '0',
  stringExemple: false,
}
