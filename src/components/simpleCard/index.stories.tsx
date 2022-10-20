import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { SimpleCard } from './index'
import { SimpleCardRootProps } from './types'
import { FaArrowDown } from 'react-icons/fa'

archi

export default {
  title: 'Components/SimpleCard',
  component: SimpleCard.Root,
  args: {
    children: [
      <SimpleCard.Icon>
        <FaArrowDown />
      </SimpleCard.Icon>,
      <SimpleCard.Title>Title Card</SimpleCard.Title>,
      <SimpleCard.Description>
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
      </SimpleCard.Description>,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    border: {
      name: 'Border card',
      control: {
        type: 'inline-radio',
      },
    },
    shadow: {
      name: 'Shadow card',
      control: {
        type: 'inline-radio',
      },
    },
    fullWidth: {
      name: 'Width card',
      control: {
        type: 'boolean',
      },
    },
    styles: {
      name: 'Styles',
      control: {
        type: 'object',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<SimpleCardRootProps>

export const Default: StoryObj<SimpleCardRootProps> = {}

export const OnlyTitle: StoryObj<SimpleCardRootProps> = {
  args: {
    children: [<SimpleCard.Title>Title card</SimpleCard.Title>],
  },
}

export const OnlyDescription: StoryObj<SimpleCardRootProps> = {
  args: {
    children: [
      <SimpleCard.Description>Description card</SimpleCard.Description>,
    ],
  },
}
