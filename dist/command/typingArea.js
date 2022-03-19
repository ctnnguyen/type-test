import React, {useContext, useRef, useState} from "../../snowpack/pkg/react.js";
import styled from "../../snowpack/pkg/styled-components.js";
import {CookiesContext, Mode, TextContext} from "../providers/index.js";
var Color;
(function(Color2) {
  Color2["Inherit"] = "inherit";
  Color2["Highlight"] = "#a56de2";
  Color2["Correct"] = "#68b723";
  Color2["Wrong"] = "#c6262e";
})(Color || (Color = {}));
const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1.4rem 1rem;
  border-radius: 0.4rem;
  background: #eaeaea;
`;
const TextDisplay = styled.div`
  margin-bottom: 1rem;
  height: 3.2em;
  overflow: hidden;
`;
const Word = styled.span`
  ${(props) => props.hidden && "display: none;"}
  color: ${(props) => props.color};
`;
const Input = styled.input`
  width: 100%;
  border: none;
  font: inherit;
  padding: 0.4rem 1rem;
  border-radius: 0.2rem;
  box-sizing: border-box;
  font-size: 1.2rem;
`;
export const TypingArea = (props) => {
  const {mode} = useContext(CookiesContext);
  const {text, currentWord, setCurrentWord} = useContext(TextContext);
  const wordElements = useRef([]);
  const [colors, setColors] = useState([]);
  React.useEffect(() => {
    if (text.length) {
      setColors(text.map((_, i) => i !== 0 ? Color.Inherit : Color.Highlight));
    }
  }, [text]);
  const handleKeyPress = (e) => {
    const value = e.target.value;
    if (currentWord === 0 && value === "" && !props.isRunning) {
      props.startStopwatch();
    }
    if (e.key === " ") {
      e.preventDefault();
      if (value !== "") {
        const currenWordPosition = wordElements.current[currentWord].getBoundingClientRect();
        const nextWordPosition = wordElements.current[currentWord + 1].getBoundingClientRect();
        if (currenWordPosition.top < nextWordPosition.top) {
          for (let i = 0; i < currentWord + 1; i++) {
            wordElements.current[i].setAttribute("hidden", "");
          }
        }
        if (value === text[currentWord]) {
          props.updateScore(true);
          setColors(colors.map((color, i) => {
            if (i === currentWord) {
              return Color.Correct;
            } else if (i === currentWord + 1) {
              return Color.Highlight;
            } else {
              return color;
            }
          }));
        } else {
          props.updateScore(false);
          setColors(colors.map((color, i) => {
            if (i === currentWord) {
              return Color.Wrong;
            } else if (i === currentWord + 1) {
              return Color.Highlight;
            } else {
              return color;
            }
          }));
        }
        e.target.value = "";
        setCurrentWord(currentWord + 1);
      }
    } else if (e.key === "Enter" && mode === Mode.Leisure) {
      props.stopStopwatch();
    }
  };
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(TextDisplay, null, text.map((word, i) => {
    const getRef = (element) => wordElements.current.push(element);
    return /* @__PURE__ */ React.createElement(Word, {
      key: word + i,
      ref: getRef,
      color: colors[i]
    }, word, " ");
  })), /* @__PURE__ */ React.createElement(Input, {
    type: "text",
    onKeyPress: handleKeyPress
  }));
};
