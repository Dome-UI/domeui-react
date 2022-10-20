import React from 'react'

import { Button } from '../src/components/button'

export function App() {
  return (
    <div>
      <h1>Testing your component.</h1>
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
