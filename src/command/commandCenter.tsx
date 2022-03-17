import React, { useEffect, useState } from 'react'
import { useStopwatch } from 'react-timer-hook'
import styled from 'styled-components'
import { Bar } from './bar'
import { TypingArea } from './typingArea'

export interface Score {
  total: number
  correct: number
  wrong: number
}

const Wrapper = styled.section`
  margin: 0 0.4rem;
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(-2vh);
  height: 100vh;
`

export const CommandCenter = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } = useStopwatch({ autoStart: false })
  const [finalScore, setFinalScore] = useState<Score>({ total: 0, correct: 0, wrong: 0 })
  const [wpm, setWPM] = useState<string>('XX')
  const [accuracy, setAccuracy] = useState<string>('XX')

  useEffect(() => {
    if (seconds || minutes || hours || days) {
      const mins = (days / 1440) + (hours / 60) + minutes + (seconds * 0.0166667)
      const acc = Math.min(Math.floor((finalScore.correct / finalScore.total) * 100), 100)
      const calculated = finalScore.total / mins
      setWPM(calculated.toString())
      setAccuracy(acc.toString())
    }
  }, [pause])

  return (
    <Wrapper>
      <Bar
        wpm={wpm}
        accuracy={accuracy}
      />
      <TypingArea
        isRunning={isRunning}
        startStopwatch={start}
        stopStopwatch={pause}
        setFinalScore={setFinalScore}
      />
    </Wrapper>
  )
}
