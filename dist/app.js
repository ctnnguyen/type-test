import React from "../snowpack/pkg/react.js";
import styled from "../snowpack/pkg/styled-components.js";
import {CommandCenter} from "./command/commandCenter.js";
import {Footer} from "./footer.js";
import {CookiesProvider, TextProvider} from "./providers/index.js";
const Header = styled.h2`
  line-height: 2rem;
  text-align: center;
  position: fixed;
  top: 1.2rem;
  left: 0;
  right: 0;
`;
export const App = () => {
  return /* @__PURE__ */ React.createElement(CookiesProvider, null, /* @__PURE__ */ React.createElement(TextProvider, null, /* @__PURE__ */ React.createElement(Header, null, "type test"), /* @__PURE__ */ React.createElement(CommandCenter, null), /* @__PURE__ */ React.createElement(Footer, null)));
};
