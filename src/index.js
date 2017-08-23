import React from "react"
import { render } from "react-dom"
import Root from "./containers/Root"
import configureStore from "./configureStore"
import styles from "./styles/main.scss"
import registerServiceWorker from "./registerServiceWorker"
const store = configureStore()
render(<Root store={store} />, document.getElementById("root"))

registerServiceWorker()
