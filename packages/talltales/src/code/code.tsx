import {Canvas} from '@storybook/blocks'

export type CodeBlockProps = {
  sourceCode: string
}
export function CodeBlock(props) {
  const {sourceCode} = props
  return <Canvas source={sourceCode} sourceState="shown" />
}

export class CodeBlockBuilder {
  #lines
  #sep
  constructor(initLn, sep = '\n') {
    this.#lines = []
    this.#sep = sep
    if (initLn) {
      this.lines.push(initLn)
    }
  }

  addLine(ln) {
    this.#lines.push(ln ?? this.#sep)
    return this
  }
  toString() {
    return this.#lines.join(this.#sep)
  }
  build() {
    return this.toString()
  }
}
