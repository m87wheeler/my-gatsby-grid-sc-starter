import React from "react"
import styled from "styled-components"

const Wrapper = styled.footer`
  width: 100%;
  height: 3rem;
  padding: 1rem;
  background: ${props => props.theme.colors.black};

  h1 {
    color: ${props => props.theme.colors.white};
  }
`

const Footer = props => {
  return (
    <Wrapper>
      <h1>Footer</h1>
    </Wrapper>
  )
}

export default Footer
