import React, { createRef, useContext, useEffect, useRef } from 'react'
import { useStopwatch } from 'react-timer-hook'
import styled from 'styled-components'
import { TextContext } from '../providers'

const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1.4rem 1rem;
  border-radius: 0.4rem;
  background: #eaeaea;
`

const TextDisplay = styled.div`
  margin-bottom: 1rem;
  height: 3.2em;
  overflow: hidden;
`

const Word = styled.span<{ hidden?: boolean; correct?: boolean; wrong?: boolean; highlight?: boolean }>`
  ${props => props.hidden && 'display: none;'}
  ${props => props.correct && 'color: #68b723;'}
  ${props => props.wrong && 'color: #c6262e;'}
  ${props => props.highlight && 'color: #a56de2;'}
`

const Input = styled.input`
  width: 100%;
  border: none;
  font: inherit;
  padding: 0.4rem 1rem;
  border-radius: 0.2rem;
  box-sizing: border-box;
  font-size: 1.2rem;
`

export const TypingArea = () => {
  const { text, currentWord, setCurrentWord } = useContext(TextContext)
  // const wordElements = useRef(Array.from({ length: text.length }, a => createRef<HTMLSpanElement>()))
  const wordElements = useRef<any>([])
  const { isRunning, start, pause, reset } = useStopwatch({ autoStart: false })

  // useEffect(() => {
  //   wordElements.current = Array.from({ length: text.length }, a => createRef<HTMLSpanElement>())
  // }, [text])

  const handleKeyPress = (e) => {
    const value = e.target.value

    // Check if first word entered
    if (currentWord === 0 && value === '' && !isRunning) {
      start()
    }

    if (e.key === ' ') {
      e.preventDefault()

      if (value !== '') {
        // Scroll down text when reach new line
        const currenWordPosition = wordElements.current[currentWord].getBoundingClientRect()
        const nextWordPosition = wordElements.current[currentWord + 1].getBoundingClientRect()
        if (currenWordPosition.top < nextWordPosition.top) {
          for (let i = 0; i < currentWord + 1; i++) {
            wordElements.current[i].setAttribute('hidden', '')
          }
        }

        // If it is not the last word increment currentWord
        if (currentWord < text.length - 1) {
          if (value === text[currentWord]) {
            wordElements.current[currentWord].setAttribute('correct', '')
          } else {
            wordElements.current[currentWord].setAttribute('wrong', '')
          }
          wordElements.current[currentWord + 1].setAttribute('highlight', '')
        } else if (currentWord === text.length - 1) {
          wordElements.current[currentWord].setAttribute('wrong', '')
        }

        e.target.value = ''
        setCurrentWord(currentWord + 1)
      }
    }
  }

  return (
    <Wrapper>
      <TextDisplay>
        {
          text.map((word: string, i) => {
            const getRef = (element) => wordElements.current.push(element)
            return <Word key={word + i} ref={getRef} highlight={i === 0}>{word} </Word>
          })
        }
      </TextDisplay>
      <Input type={'text'} onKeyPress={handleKeyPress} placeholder={'start typing here...'} />
    </Wrapper>
  )
}


// <!--        <div class="bar">-->
// <!--          <input id="input-field" type="text" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off" tabindex="1"/>-->
// <!--          <button id="redo-button" onclick="setText(event)" tabindex="2">redo</button>-->
