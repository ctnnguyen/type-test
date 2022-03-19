import React, {useContext, useEffect} from "../snowpack/pkg/react.js";
import styled from "../snowpack/pkg/styled-components.js";
import {useFilePicker} from "../snowpack/pkg/use-file-picker.js";
import {TextContext} from "./providers/index.js";
const Wrapper = styled.footer`
  text-align: center;
  position: fixed;
  bottom: 1.2rem;
  left: 0;
  right: 0;
`;
const CTA = styled.span`
  cursor: pointer;
`;
export const Footer = () => {
  const {setCustomText} = useContext(TextContext);
  const [openFileSelector, {filesContent, loading, errors}] = useFilePicker({
    accept: ".txt",
    readAs: "Text",
    multiple: false,
    limitFilesConfig: {max: 1}
  });
  useEffect(() => {
    if (!loading && !errors.length && filesContent.length) {
      setCustomText(filesContent[0].content);
    }
  }, [filesContent, loading]);
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(CTA, {
    onClick: () => openFileSelector()
  }, "import"));
};
