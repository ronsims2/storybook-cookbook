import {addons} from '@storybook/manager-api'

addons.setConfig({
  sidebar: {
    filters: {
      patterns: item => {
        const {tags = []} = item
        return !tags.includes('hidden-item')
      },
    },
    collapsedRoots: ['Top Secret'],
  },
})
