import React, {useContext} from "../../snowpack/pkg/react.js";
import styled from "../../snowpack/pkg/styled-components.js";
import {CookiesContext} from "../providers/index.js";
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Wing = styled.div`
  color: #1a1a1a;
`;
const ModeButton = styled.button`
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
  text-decoration: underline;
`;
export const Bar = (props) => {
  const {mode, toggleMode} = useContext(CookiesContext);
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Wing, null, "Mode:", /* @__PURE__ */ React.createElement(ModeButton, {
    type: "button",
    onClick: toggleMode
  }, mode)), /* @__PURE__ */ React.createElement(Wing, null, "WPM: ", props.wpm, " / ACC: ", props.accuracy));
};
