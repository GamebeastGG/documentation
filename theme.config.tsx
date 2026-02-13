import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

import Footer from 'components/Footer'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', gap: '.7em' }}>
      <picture>
        <source srcSet="/logo-white.svg" media="(prefers-color-scheme: dark)" />
        <img
          src="/logo-color.svg"
          alt="Gamebeast"
          style={{ height: 34, width: 'auto', display: 'block' }}
        />
      </picture>
      <span style={{ fontWeight: 600 }}>Gamebeast Docs</span>
    </span>
  ),
  head: function UseHead() {
    const { title } = useConfig()
    return (
    <>
      <title>{title ? title + ' | Documentation': 'Optimize Your Game'} </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title ? title + ' | Documentation' : 'Optimize Your Game'} />
      <meta property="og:description" content="Optimize your game with Gamebeast" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/logo-white.png" />
    </>
  )},
  project: {
    link: 'https://github.com/GamebeastGG/documentation',
  },
  docsRepositoryBase: 'https://github.com/GamebeastGG/documentation',
  footer: {
    component : <Footer/>
  },
}

export default config

