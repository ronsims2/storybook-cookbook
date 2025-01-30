export class ManagerConfigBuilder {
  #managerConfig
  constructor(config) {
    this.#managerConfig = structuredClone(config) ?? {}
  }

  /**
   *
   * @param hiddenTags string[] - A list of tags that if found in a story will hide it.
   * returns this
   */
  setSidebarHiddenItems(hiddenTags = ['hidden-items']) {
    if (!this.#managerConfig.sidebar) {
      this.#managerConfig.sidebar = {}
      if (!this.#managerConfig.sidebar.filters) {
        this.#managerConfig.sidebar.filters = {}

        this.#managerConfig.sidebar.filters.patterns = item => {
          const {tags = []} = item
          const found = tags.reduce((prev, curr) => {
            if (hiddenTags.includes(curr)) {
              return prev + 1
            }

            return prev
          }, 0)

          return found > 0
        }
      }
    }
    return this
  }
}
