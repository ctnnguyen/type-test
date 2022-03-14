import React from 'react'
import styled from 'styled-components'
import { Bar } from './bar'
import { TypingArea } from './typingArea'

const Wrapper = styled.section`
  margin: 0 0.4rem;
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(-2vh);
  height: 100vh;
`

export const CommandCenter = () => (
  <Wrapper>
    <Bar />
    <TypingArea />
  </Wrapper>
)
