import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 206 246" fill="none">
      <circle cx="40" cy="40" r="40" fill="currentColor"/>
      <circle cx="40" cy="206" r="40" fill="currentColor"/>
      <circle cx="166" cy="120" r="40" fill="currentColor"/>
    </svg>
    <span style={{ marginLeft: '.4em', fontWeight: 800 }}>Gamebeast SDK</span>
  </>
  ),
  head: function UseHead() {
    const { title } = useConfig()
    return (
    <>
      <title>{title ? title + ' | Gamebeast SDK': 'Optimize Your Game'} </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Optimize Your Game" />
      <meta property="og:description" content="Optimize your game with the Gamebeast SDK" />
      <meta
          name="og:title"
          content={title ? title + ' | Gamebeast SDK' : 'Optimize Your Game'}
        />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          media="(prefers-color-scheme: dark)"
        />
    </>
  )},
  project: {
    link: 'https://github.com/GamebeastGG/documentation',
  },
  docsRepositoryBase: 'https://github.com/GamebeastGG/documentation',
  footer: {
    text: 'Gamebeast Docs',
  },
}

export default config

