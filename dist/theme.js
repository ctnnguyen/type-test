import {useEffect, useState} from "../snowpack/pkg/react.js";
import {useCookies} from "../snowpack/pkg/react-cookie.js";
const themes = {
  light: {
    primaryBgColor: "#fafafa",
    primaryColor: "#1a1a1a"
  }
};
export const useTheme = () => {
  const [cookies, setCookie] = useCookies(["theme"]);
  const [theme, setTheme] = useState();
  useEffect(() => {
    setTheme(themes[cookies.theme ?? "light"]);
  }, [cookies]);
  return {theme};
};
