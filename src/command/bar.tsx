import React, { useContext } from 'react'
import styled from 'styled-components'
import { CookiesContext } from '../cookiesProvider'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Wing = styled.div`
  color: #1a1a1a;
`

const ModeButton = styled.button`
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
  text-decoration: underline;
`

export const Bar = () => {
  const { mode, toggleMode } = useContext(CookiesContext)

  return (
    <Wrapper>
      <Wing>
        Mode:
        <ModeButton type={'button'} onClick={toggleMode}>{mode}</ModeButton>
      </Wing>
      <Wing>
        WPM: XX / ACC: XX
      </Wing>
    </Wrapper>
  )
}
