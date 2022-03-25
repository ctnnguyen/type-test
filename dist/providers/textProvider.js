import React, {createContext, useEffect, useState} from "../../snowpack/pkg/react.js";
import randomWords from "../random.json.proxy.js";
export const TextContext = createContext({});
export const TextProvider = ({children}) => {
  const [text, setText] = useState([]);
  const [currentWord, setCurrentWord] = useState(0);
  const setCustomText = (words) => {
    const replaced = words.replace(/[\n\r]/g, " ").replace(/ {2,}/g, " ").split(" ");
    setText(replaced);
  };
  const resetText = () => {
    const words = [];
    for (let i = 0; i < 500; i++) {
      const n = Math.floor(Math.random() * randomWords.length);
      words.push(randomWords[n]);
    }
    setText(words);
  };
  useEffect(() => {
    resetText();
  }, []);
  return /* @__PURE__ */ React.createElement(TextContext.Provider, {
    value: {
      text,
      resetText,
      currentWord,
      setCurrentWord,
      setCustomText
    }
  }, children);
};
