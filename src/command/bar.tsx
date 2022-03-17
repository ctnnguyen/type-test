import React, { useContext } from 'react'
import styled from 'styled-components'
import { CookiesContext } from '../providers'

interface Props {
  wpm: string
  accuracy: string
}

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

export const Bar = (props: Props) => {
  const { mode, toggleMode } = useContext(CookiesContext)

  return (
    <Wrapper>
      <Wing>
        Mode:
        <ModeButton type={'button'} onClick={toggleMode}>{mode}</ModeButton>
      </Wing>
      <Wing>
        WPM: {props.wpm} / ACC: {props.accuracy}
      </Wing>
    </Wrapper>
  )
}
