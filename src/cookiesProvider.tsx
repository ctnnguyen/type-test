import React, { createContext, Dispatch, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

interface CookiesProps {
  theme: string
  setTheme: Dispatch<any>
  mode: Mode
  toggleMode: () => void
}

export enum Mode {
  Leisure = 'Leisure',
  Timed = 'Timed',
}

export const CookiesContext = createContext<CookiesProps>({} as CookiesProps)

export const CookiesProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(['theme', 'mode'])
  const [theme, setTheme] = useState(cookies.theme)
  const [mode, setMode] = useState(cookies.mode)

  const toggleMode = () => {
    setMode(mode === Mode.Leisure ? Mode.Timed : Mode.Leisure)
  }

  useEffect(() => {
    setCookie('theme', theme ?? 'light')
    setCookie('mode', mode ?? Mode.Leisure)
  }, [theme, mode])

  return (
    <CookiesContext.Provider
      value={{
        theme,
        setTheme,
        mode,
        toggleMode,
      }}
    >
      { children }
    </CookiesContext.Provider>
  )
}
