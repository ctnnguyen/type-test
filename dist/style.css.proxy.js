// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');\r\n\r\nbody {\r\n  margin: 0;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  font-family: Roboto Mono;\r\n  line-height: 1.6rem;\r\n}\r\n\r\n/*#theme-area{*/\r\n/*  margin-top: 1rem;*/\r\n/*  padding: 1.4rem 1rem;*/\r\n/*  border-radius: 0.4rem;*/\r\n/*  background: #eaeaea;*/\r\n/*  display: grid;*/\r\n/*  grid-gap: 1rem;*/\r\n/*  grid-template-columns: 1fr 1fr 1fr 1fr;*/\r\n/*}*/\r\n\r\n/*#theme-center{*/\r\n/*  margin: 0 0.4rem;*/\r\n/*  width: 100%;*/\r\n/*  max-width: 40rem;*/\r\n/*  display: flex;*/\r\n/*  flex-direction: column;*/\r\n/*  justify-content: center;*/\r\n/*  transform: translateY(-2vh);*/\r\n/*}*/\r\n\r\n/*.theme-button{*/\r\n/*  padding: 1rem 0;*/\r\n/*  background: gray;*/\r\n/*  border-radius: 0.4rem;*/\r\n/*  text-align: center;*/\r\n/*  font-size: .8rem;*/\r\n/*}*/\r\n\r\n/*.theme-button:hover{*/\r\n/*  cursor: pointer;*/\r\n/*  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);*/\r\n/*}*/\r\n\r\n\r\n\r\n/*#text-display {*/\r\n/*  margin-bottom: 1rem;*/\r\n/*  overflow: hidden;*/\r\n/*}*/\r\n\r\n/*#input-field {*/\r\n/*  width: 100%;*/\r\n/*  border: none;*/\r\n/*  font: inherit;*/\r\n/*  padding: 0.4rem 1rem;*/\r\n/*  border-radius: 0.2rem;*/\r\n/*  font-size: 1.2rem;*/\r\n/*}*/\r\n\r\n/*#redo-button {*/\r\n/*  margin-left: 0.7rem;*/\r\n/*  border: none;*/\r\n/*  font: inherit;*/\r\n/*  padding: 0.4rem 1rem;*/\r\n/*  border-radius: 0.2rem;*/\r\n/*  font-size: 1.2rem;*/\r\n/*  cursor: pointer;*/\r\n/*}*/\r\n\r\n/*#footer {*/\r\n/*  margin-bottom: 1.2rem;*/\r\n/*  display: flex;*/\r\n/*}*/\r\n\r\n/*#footer *{*/\r\n/*  text-decoration: none;*/\r\n/*  margin: 0 .5rem;*/\r\n/*  color: inherit;*/\r\n/*}*/\r\n\r\n/*#footer .button{*/\r\n/*  cursor: pointer;*/\r\n/*}*/\r\n\r\n/*#footer a:visited{*/\r\n/*  color: unset;*/\r\n/*}*/\r\n\r\n/*.hidden{ */\r\n/*  display: none !important;*/\r\n/*}*/\r\n\r\n/*body, #header, #left-wing, #right-wing, #typing-area, #theme-area, #theme-center,*/\r\n/*#text-display, #redo-button, #footer, #highlight {*/\r\n/*  transition: all .4s ease-in-out 0s;*/\r\n\r\n/*}*/\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}