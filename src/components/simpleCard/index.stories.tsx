import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { SimpleCard } from './index'
import { SimpleCardRootProps } from './types'
import { FaArrowDown } from 'react-icons/fa'

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
      options: ['none', 'small', 'medium', 'large', 'xlarge'],
      control: {
        type: 'inline-radio',
      },
    },
    shadow: {
      name: 'Shadow card',
      options: ['light', 'default', 'medium', 'large', 'none'],
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
