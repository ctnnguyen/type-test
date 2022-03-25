import React, { createContext, Dispatch, useEffect, useState } from 'react'
import randomWords from '../random.json'

interface TextProps {
  text: string[]
  resetText: () => void
  currentWord: number
  setCurrentWord: Dispatch<any>
  setCustomText: (words: string) => void
}

export const TextContext = createContext<TextProps>({} as TextProps)

export const TextProvider = ({ children }) => {
  const [text, setText] = useState<string[]>([])
  const [currentWord, setCurrentWord] = useState<number>(0)

  const setCustomText = (words: string) => {
    const replaced = words
      .replace(/[\n\r]/g, ' ')
      .replace(/ {2,}/g, ' ')
      .split(' ')
    setText(replaced)
  }

  const resetText = () => {
    const words: string[] = []
    for (let i = 0; i < 500; i++) {
      const n = Math.floor(Math.random() * randomWords.length)
      words.push(randomWords[n])
    }
    setText(words)
  }

  useEffect(() => {
    resetText()
  }, [])

  return (
    <TextContext.Provider
      value={{
        text,
        resetText,
        currentWord,
        setCurrentWord,
        setCustomText,
      }}
    >
      { children }
    </TextContext.Provider>
  )
}
