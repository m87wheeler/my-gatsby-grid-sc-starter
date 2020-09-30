import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    primary: "steelblue",
    confirm: "seagreen",
    danger: "crimson",
    white: "whitesmoke",
    black: "#222",
  },
}

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
