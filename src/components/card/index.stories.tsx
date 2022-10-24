import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { VscArrowSwap } from 'react-icons/vsc'
import { BsThreeDotsVertical } from 'react-icons/bs'

import { Card } from './index'
import { CardRootProps } from './types'

export default {
  title: 'Components/Card',
  component: Card.Root,
  args: {
    children: [
      <Card.Header>
        <VscArrowSwap size={20} />
        <Card.Title>Lorem ipsum</Card.Title>
        <BsThreeDotsVertical size={20} />
      </Card.Header>,
      <Card.Image
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
        alt="Teste"
      />,
      <Card.Description>Lorem ipsum</Card.Description>,
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
        options: ['none', 'small', 'medium', 'large', 'xlarge'],
        type: 'inline-radio',
      },
    },
    shadow: {
      name: 'Shadow card',
      control: {
        options: ['light', 'default', 'medium', 'large', 'none'],
        type: 'inline-radio',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<CardRootProps>

export const Default: StoryObj<CardRootProps> = {}

export const HeaderAndImage: StoryObj<CardRootProps> = {
  args: {
    children: [
      <Card.Header>
        <VscArrowSwap size={20} />
        <Card.Title>Lorem ipsum</Card.Title>
        <BsThreeDotsVertical size={20} />
      </Card.Header>,
      <Card.Image
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
        alt="Teste"
      />,
    ],
  },
}

export const ImageAndFooter: StoryObj<CardRootProps> = {
  args: {
    children: [
      <Card.Image
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
        alt="Teste"
      />,
      <Card.Description>Lorem ipsum</Card.Description>,
    ],
  },
}

export const TitleAndImage: StoryObj<CardRootProps> = {
  args: {
    children: [
      <Card.Header>
        <Card.Title>Lorem Ipsum</Card.Title>
      </Card.Header>,
      <Card.Image
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
        alt="Teste"
      />,
    ],
  },
}
