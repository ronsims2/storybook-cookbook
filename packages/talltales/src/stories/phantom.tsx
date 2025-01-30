import {Meta, StoryObj} from '@storybook/react'

function Phantom() {
  return <></>
}

export const PhantomMeta: Meta<typeof Phantom> = {
  title: 'Tall Tales/Phantom',
  tags: ['hidden-item'],
  component: Phantom,
} satisfies Meta<typeof Phantom>

type PhantomStory = StoryObj<typeof Phantom>

export const PhantomTale: PhantomStory = {}
