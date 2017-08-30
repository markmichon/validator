import React from "react"
import { Provider } from "react-redux"
// import { Router, Route, browserHistory } from "react-router"
import { ThemeProvider } from "styled-components"
import App from "./App"

const theme = {
  mid: "hsla(210, 16%, 93%, 1.00)",
  dark: "hsla(0, 0%, 80%, 1.00)",
  light: "hsla(0, 0%, 98%, 1.00)",
  white: "",
  brand: "hsla(213, 12%, 43%, 1.00)",
  copy: "black",
  error: "hsla(359, 74%, 78%, 1.00)",
  warning: "hsla(35, 93%, 72%, 1.00)",
  notice: "hsla(205, 68%, 90%, 1.00)"
}

const Root = ({ store }) =>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>

export default Root
