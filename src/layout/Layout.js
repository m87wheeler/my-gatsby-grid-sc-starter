import React from "react"
import styled from "styled-components"

import Theme from "./Theme"
import { GlobalReset, GlobalStyling } from "./Global"
import Header from "../components/template/Header"
import Footer from "../components/template/Footer"

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Theme>
      <GlobalReset />
      <GlobalStyling />
      <Container>
        <Header />
        {children ? (
          children
        ) : (
          <p>
            Place Your Content Between The {`<Layout>`} component in &nbsp;
            <code style={{ fontFamily: "monospace" }}>index.js</code>
          </p>
        )}
        <Footer />
      </Container>
    </Theme>
  )
}

export default Layout
