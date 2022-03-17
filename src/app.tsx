import React from 'react'
import styled from 'styled-components'
import { CommandCenter } from './command/commandCenter'
import { Footer } from './footer'
import { CookiesProvider, TextProvider } from './providers'

const Header = styled.h2`
  line-height: 2rem;
  text-align: center;
  position: fixed;
  top: 1.2rem;
  left: 0;
  right: 0;
`

export const App = () => {
  return (
    <CookiesProvider>
      <TextProvider>
        <Header>
          type test
        </Header>
        <CommandCenter />
        <Footer />
      </TextProvider>
    </CookiesProvider>
  )
}
