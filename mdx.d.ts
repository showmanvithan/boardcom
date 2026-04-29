declare module '*.mdx' {
  import type { ComponentType } from 'react'
  import type { MDXProps } from 'mdx/types'

  const MDXComponent: ComponentType<MDXProps>
  export default MDXComponent

  // your named exports go here explicitly
  export const mdxdata: {
    title: string
    description: string
    image: string
  }
}