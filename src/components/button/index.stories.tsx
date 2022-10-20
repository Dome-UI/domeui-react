import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { Button } from './index'
import { ButtonRootProps } from './types'

export default {
  title: 'Components/Button',
  component: Button.Root,
  args: {
    children: 'Press me',
    backgroundColor: '#F6BE27',
    color: '#242424',
    border: 'small',
    buttonSize: 'medium',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
      name: 'Background color',
      table: {
        category: 'COLORS',
      },
    },
    color: {
      control: {
        type: 'color',
      },
      name: 'Text color',
      table: {
        category: 'COLORS',
      },
    },
    hoverColor: {
      control: {
        type: 'color',
      },
      name: 'Hover color',
      table: {
        category: 'COLORS',
      },
    },
    clickColor: {
      control: {
        type: 'color',
      },
      name: 'Click color',
      table: {
        category: 'COLORS',
      },
    },
    border: {
      options: ['none', 'small', 'medium', 'full'],
      control: {
        type: 'inline-radio',
      },
      name: 'Rounding border',
      table: {
        category: 'SIZES',
      },
    },
    buttonSize: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: {
        type: 'inline-radio',
      },
      name: 'Button size',
      table: {
        category: 'SIZES',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
      name: 'Fill full width',
      table: {
        category: 'SIZES',
      },
    },
    fullHeight: {
      control: {
        type: 'boolean',
      },
      name: 'Fill full height',
      table: {
        category: 'SIZES',
      },
    },
    styles: {
      control: {
        type: 'object',
      },
      name: 'Custom styles',
      table: {
        category: 'OTHERS',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<ButtonRootProps>

export const Default: StoryObj<ButtonRootProps> = {}

export const WithIconRight: StoryObj<ButtonRootProps> = {
  args: {
    children: ['Press me', <FaArrowRight />],
  },
}

export const WithIconLeft: StoryObj<ButtonRootProps> = {
  args: {
    children: [<FaArrowLeft />, 'Press me'],
  },
}
