import {addons} from '@storybook/manager-api'

addons.setConfig({
  sidebar: {
    filters: {
      patterns: item => {
        const {tags = []} = item
        console.table(item)
        return !tags.includes('hidden-item')
      },
    },
    collapsedRoots: ['Top Secret'],
  },
})
