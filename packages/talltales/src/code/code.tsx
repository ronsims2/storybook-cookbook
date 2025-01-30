import {Canvas} from '@storybook/blocks'

export type CodeBlockProps = {
  sourceCode: string
}
export function CodeBlock(props) {
  const {sourceCode} = props
  return <Canvas source={sourceCode} sourceState="shown" />
}

export class CodeBlockBuilder {
  constructor(initLn) {
    this.lines = []
    if (initLn) {
      this.lines.push(initLn)
    }
  }

  addLine(ln) {
    this.lines.push(ln ?? '\n')
    return this
  }
  toString() {
    lines.join('\n')
  }
}
