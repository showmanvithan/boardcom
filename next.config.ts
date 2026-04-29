import type { NextConfig } from 'next'
import type { Configuration } from 'webpack'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'e10d-150-129-89-165.ngrok-free.app',
    'opengraph.githubassets.com',
  ],
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

 
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)