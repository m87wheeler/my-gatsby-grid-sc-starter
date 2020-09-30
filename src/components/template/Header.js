import React from "react"
import styled from "styled-components"

const Wrapper = styled.header`
  width: 100%;
  height: 3rem;
  padding: 1rem;
  background: ${props => props.theme.colors.black};

  h1 {
    color: ${props => props.theme.colors.white};
  }
`

const Header = props => {
  return (
    <Wrapper>
      <h1>Header</h1>
    </Wrapper>
  )
}

export default Header
