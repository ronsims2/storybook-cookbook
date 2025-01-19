import type {Preview} from '@storybook/react'
// globally apply a stylesheet
import './styles.scss'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Organization', 'Custom CSS', 'Example'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
