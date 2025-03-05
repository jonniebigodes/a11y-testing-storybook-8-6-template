import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'
import { allModes } from '../../../.storybook/modes'

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    chromatic: {
      modes: {
        xs: allModes.xs,
        s: allModes.s,
        m: allModes.m,
        l: allModes.l,
      },
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithCartData: Story = {
  parameters: {
    store: {
      initialState: {
        cart: {
          visible: false,
          items: [
            {
              id: 2,
              name: 'Fries',
              description: 'Fried french fries',
              price: 2.5,
              quantity: 2,
            },
            {
              id: 1,
              name: 'Cheeseburger',
              description: 'Nice grilled burger with cheese',
              price: 8.5,
              quantity: 1,
            },
          ],
        },
      },
    },
  },
}
