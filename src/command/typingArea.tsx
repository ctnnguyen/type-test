import React, { Dispatch, useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import { CookiesContext, Mode, TextContext } from '../providers'
import type { Score } from './commandCenter'

interface Props {
  isRunning: boolean
  startStopwatch: () => void
  stopStopwatch: () => void
  setFinalScore: Dispatch<any>
}

// @todo Move this to correct component
enum Color {
  Inherit = 'inherit',
  Highlight = '#a56de2',
  Correct = '#68b723',
  Wrong = '#c6262e',
}

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

const Word = styled.span<{ color: string }>`
  ${props => props.hidden && 'display: none;'}
  color: ${props => props.color};
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

export const TypingArea = (props: Props) => {
  const { mode } = useContext(CookiesContext)
  const { text, currentWord, setCurrentWord } = useContext(TextContext)
  // const wordElements = useRef(Array.from({ length: text.length }, a => createRef<HTMLSpanElement>()))
  const wordElements = useRef<any>([])
  const score: Score = { total: 0, correct: 0, wrong: 0 }
  const updateScore = (isCorrect: boolean) => {
    score.total++
    isCorrect ? score.correct++ : score.wrong++
  }
  // const colors = Array(text.length).fill(Color.Inherit)
  const [colors, setColors] = useState<Color[]>([])

  React.useEffect(() => {
    if (text.length) {
      setColors(text.map((_, i) => i !== 0 ? Color.Inherit : Color.Highlight))
    }
  },[text])

  // useEffect(() => {
  //   wordElements.current = Array.from({ length: text.length }, a => createRef<HTMLSpanElement>())
  // }, [text])

  const handleKeyPress = (e) => {
    const value = e.target.value

    // Check if first word entered
    if (currentWord === 0 && value === '' && !props.isRunning) {
      props.startStopwatch()
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

        // @todo refactor below
        value === text[currentWord]
          ? setColors(colors.map((color, i) => {
            if (i === currentWord) {
              return Color.Correct
            } else if (i === currentWord + 1) {
              return Color.Highlight
            } else {
              return color
            }
          }))
          : setColors(colors.map((color, i) => {
            if (i === currentWord) {
              return Color.Wrong
            } else if (i === currentWord + 1) {
              return Color.Highlight
            } else {
              return color
            }
          }))

        e.target.value = ''
        setCurrentWord(currentWord + 1)
      }
    } else if (e.key === 'Enter' && mode === Mode.Leisure) {
      props.stopStopwatch()
      props.setFinalScore(score)
    }
  }

  return (
    <Wrapper>
      <TextDisplay>
        {
          text.map((word: string, i) => {
            const getRef = (element) => wordElements.current.push(element)
            return <Word key={word + i} ref={getRef} color={colors[i]}>{word} </Word>
          })
        }
      </TextDisplay>
      <Input type={'text'} onKeyPress={handleKeyPress} />
    </Wrapper>
  )
}


// <!--        <div class="bar">-->
// <!--          <input id="input-field" type="text" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off" tabindex="1"/>-->
// <!--          <button id="redo-button" onclick="setText(event)" tabindex="2">redo</button>-->
