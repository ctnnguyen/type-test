import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

interface Themes {
  [key: string]: {
    primaryBgColor: string
    primaryColor: string
  }
}

const themes: Themes = {
  light: {
    primaryBgColor: '#fafafa',
    primaryColor: '#1a1a1a',
  }
}

export const useTheme = () => {
  const [cookies, setCookie] = useCookies<'theme', { theme?: string }>(['theme'])
  const [theme, setTheme] = useState()

  useEffect(() => {
    setTheme(themes[cookies.theme ?? 'light'])
  }, [cookies])

  return { theme }
}

// #typing-area, #theme-area {
//   background: #eaeaea;
// }
//
// #input-field {
//   background: #fafafa;
//   color: #1a1a1a;
// }
//
// #input-field.wrong {
//   background: rgba(198, 38, 46, 0.3);
// }
//
// #redo-button {
//   background: #d4d4d4;
//   color: #1a1a1a;
// }
//
// .highlight {
//   color: #a56de2;
// }
//
// .correct {
//   color: #68b723;
// }
//
// .wrong {
//   color: #c6262e;
// }

// function setTheme(_theme) {
//   const theme = _theme.toLowerCase();
//   fetch(`themes/${theme}.css`)
//     .then(response => {
//       if (response.status === 200) {
//         response
//           .text()
//           .then(css => {
//             setCookie('theme', theme, 90);
//             document.querySelector('#theme').setAttribute('href', `themes/${theme}.css`);
//             setText();
//           })
//           .catch(err => console.error(err));
//       } else {
//         console.log(`theme ${theme} is undefine`);
//       }
//     })
//     .catch(err => console.error(err));
// }