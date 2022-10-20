import React from 'react'

import { Button } from '../src/components/button'
import { Text } from '../src/components/text'

export function App() {
  return (
    <div>
      <Text tag="h1">Testing your components.</Text>

      <Text>
        Button component
      </Text>
      <Button.Root
        backgroundColor="#F6BE27"
        border="small"
        buttonSize="medium"
        color="#242424"
        style={{ background: 'red' }}
      >
        Press me
      </Button.Root>
    </div>
  )
}
