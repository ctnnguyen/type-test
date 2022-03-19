import React, {createContext, useEffect, useState} from "../../snowpack/pkg/react.js";
import {useCookies} from "../../snowpack/pkg/react-cookie.js";
export var Mode;
(function(Mode2) {
  Mode2["Leisure"] = "Leisure";
  Mode2["Timed"] = "Timed";
})(Mode || (Mode = {}));
export const CookiesContext = createContext({});
export const CookiesProvider = ({children}) => {
  const [cookies, setCookie] = useCookies(["theme", "mode"]);
  const [theme, setTheme] = useState(cookies.theme);
  const [mode, setMode] = useState(cookies.mode);
  const toggleMode = () => {
    setMode(mode === Mode.Leisure ? Mode.Timed : Mode.Leisure);
  };
  useEffect(() => {
    const _theme = theme ?? "light";
    const _mode = mode ?? Mode.Leisure;
    setCookie("theme", _theme);
    setCookie("mode", _mode);
    setTheme(_theme);
    setMode(_mode);
  }, [theme, mode]);
  return /* @__PURE__ */ React.createElement(CookiesContext.Provider, {
    value: {
      theme,
      setTheme,
      mode,
      toggleMode
    }
  }, children);
};
