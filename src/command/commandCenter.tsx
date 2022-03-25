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
  const { seconds, minutes, hours, days, isRunning, start, pause, reset: resetTimer } = useStopwatch({ autoStart: false })
  const [score, setScore] = useState<Score>({ total: 0, correct: 0, wrong: 0 })
  const [wpm, setWPM] = useState<string>('XX')
  const [accuracy, setAccuracy] = useState<string>('XX')
  const updateScore = (isCorrect: boolean) => setScore({
    total: score.total + 1,
    correct: isCorrect ? score.correct + 1 : score.correct,
    wrong: !isCorrect ? score.wrong + 1 : score.wrong,
  })

  useEffect(() => {
    setScore({ total: 0, correct: 0, wrong: 0 })
    resetTimer()
  }, [])

  useEffect(() => {
    if (seconds || minutes || hours || days) {
      const mins = (days / 1440) + (hours / 60) + minutes + (seconds * 0.0166667)
      const acc = Math.min(Math.floor((score.correct / score.total) * 100), 100)
      const calculated = Math.floor(score.total / mins)
      setWPM(calculated.toString())
      setAccuracy(acc.toString())
      resetTimer()
    }
  }, [isRunning])

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
        updateScore={updateScore}
      />
    </Wrapper>
  )
}
