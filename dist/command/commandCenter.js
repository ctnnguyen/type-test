import React, {useEffect, useState} from "../../snowpack/pkg/react.js";
import {useStopwatch} from "../../snowpack/pkg/react-timer-hook.js";
import styled from "../../snowpack/pkg/styled-components.js";
import {Bar} from "./bar.js";
import {TypingArea} from "./typingArea.js";
const Wrapper = styled.section`
  margin: 0 0.4rem;
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(-2vh);
  height: 100vh;
`;
export const CommandCenter = () => {
  const {seconds, minutes, hours, days, isRunning, start, pause, reset} = useStopwatch({autoStart: false});
  const [score, setScore] = useState({total: 0, correct: 0, wrong: 0});
  const [wpm, setWPM] = useState("XX");
  const [accuracy, setAccuracy] = useState("XX");
  const updateScore = (isCorrect) => setScore({
    total: score.total + 1,
    correct: isCorrect ? score.correct + 1 : score.correct,
    wrong: !isCorrect ? score.wrong + 1 : score.wrong
  });
  useEffect(() => {
    if (seconds || minutes || hours || days) {
      const mins = days / 1440 + hours / 60 + minutes + seconds * 0.0166667;
      const acc = Math.min(Math.floor(score.correct / score.total * 100), 100);
      const calculated = Math.floor(score.total / mins);
      setWPM(calculated.toString());
      setAccuracy(acc.toString());
    }
  }, [isRunning]);
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Bar, {
    wpm,
    accuracy
  }), /* @__PURE__ */ React.createElement(TypingArea, {
    isRunning,
    startStopwatch: start,
    stopStopwatch: pause,
    updateScore
  }));
};
