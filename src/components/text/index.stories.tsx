import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Text } from './index'
import { TextProps } from './types'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum',
  },
  argTypes: {
    fontSize: {
      name: 'Font size',
      control: {
        type: 'select',
      },
      table: {
        category: 'Font',
      },
    },
    fontWeight: {
      name: 'Font weight',
      control: {
        type: 'select',
      },
      table: {
        category: 'Font',
      },
    },
    lineHeight: {
      name: 'Line height',
      control: {
        type: 'select',
      },
      table: {
        category: 'Font',
      },
    },
    letterSpacing: {
      name: 'Letter spacing',
      control: {
        type: 'select',
      },
      table: {
        category: 'Font',
      },
    },
    textDecoration: {
      name: 'Text decoration',
      control: {
        type: 'select',
      },
      table: {
        category: 'Font',
      },
    },
    tag: {
      name: 'Tag',
      control: {
        type: 'select',
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    color: {
      name: 'Text color',
      control: {
        type: 'color',
      },
    },
    styles: {
      name: 'Styles',
      control: {
        type: 'object',
      },
      table: {
        category: 'Others',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
