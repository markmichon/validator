import React from "react"
import FormContainer from "./FormContainer"
import ResultsContainer from "./ResultsContainer"
import Header from "../components/Header"
import PreviewContainer from "./PreviewContainer"
import Switcher from "./Switcher"
import { injectGlobal } from "styled-components"

injectGlobal`
* {
  box-sizing:border-box;
}

html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.618;
  color: #333;
  font-size: 16px;
}

body {
  margin:0;
}
`

const App = () =>
  <div>
    <Header />
    <FormContainer />
    <Switcher />
  </div>

export default App
