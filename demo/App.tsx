import React from 'react'

import { Button } from '../src/components/button'
import { Text } from '../src/components/text'
import { SimpleCard } from '../src/components/simpleCard'

export function App() {
  return (
    <div>
      <Text tag="h1">Testing your components.</Text>

      <Text>Button component</Text>
      <Button.Root
        backgroundColor="#F6BE27"
        border="small"
        buttonSize="medium"
        color="#242424"
        style={{ background: 'red' }}
      >
        Press me
      </Button.Root>

      <Text>Simple card component</Text>
      <SimpleCard.Root border="medium" shadow="large">
        <SimpleCard.Icon>
          <p style={{ width: '20px' }}>ICON</p>
        </SimpleCard.Icon>
        <SimpleCard.Title>Lorem ipsum</SimpleCard.Title>
        <SimpleCard.Description>
          Lorem ipsum it dolor si a met.
        </SimpleCard.Description>
      </SimpleCard.Root>
    </div>
  )
}
