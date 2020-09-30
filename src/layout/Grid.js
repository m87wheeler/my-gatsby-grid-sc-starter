import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => (props.inline ? "inline-grid" : "grid")};
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  column-gap: ${props =>
    !props.gap && props.colgap ? `${props.colgap * 0.25}rem` : null};
  row-gap: ${props =>
    !props.gap && props.rowgap ? `${props.rowgap * 0.25}rem` : null};
  grid-gap: ${props => props.gap && `${props.gap * 0.25}rem`};
`

const GridItem = styled.div`
  display: block;
  grid-column-start: ${props => props.colstart};
  grid-column-end: ${props => props.colend};
  grid-row-start: ${props => props.rowstart};
  grid-row-end: ${props => props.rowend};
  grid-column: ${props => props.colspan};
  grid-row: ${props => props.rowspan};
`

const Grid = props => {
  // ? Grid Container
  if (props.container && !props.item) {
    return (
      <GridContainer
        inline={props.inline}
        cols={props.cols}
        colgap={props.colgap}
        rowgap={props.rowgap}
        gap={props.gap}
      >
        {props.children}
      </GridContainer>
    )
    // ? Grid Item
  } else if (props.item && !props.container) {
    return (
      <GridItem
        colspan={props.colspan}
        colstart={props.colstart}
        colend={props.colend}
        rowspan={props.rowspan}
        rowstart={props.rowstart}
        rowend={props.rowend}
      >
        {props.children}
      </GridItem>
    )
    // ? Grid Item And Grid Container
  } else if (props.container && props.item) {
    return (
      <GridItem
        colspan={props.colspan}
        colstart={props.colstart}
        colend={props.colend}
        rowspan={props.rowspan}
        rowstart={props.rowstart}
        rowend={props.rowend}
      >
        <GridContainer
          inline={props.inline}
          cols={props.cols}
          colgap={props.colgap}
          rowgap={props.rowgap}
          gap={props.gap}
        >
          {props.children}
        </GridContainer>
      </GridItem>
    )
  }
}

Grid.defaultProps = {
  cols: 12,
  colstart: "auto",
  colend: "auto",
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.bool,
  item: PropTypes.bool,
  inline: PropTypes.bool,
  cols: PropTypes.number,
  colgap: PropTypes.number,
  rowgap: PropTypes.number,
  gap: PropTypes.number,
  colstart: PropTypes.number | "auto",
  colend: PropTypes.number,
  colspan: PropTypes.string,
  rowstart: PropTypes.number | "auto",
  rowend: PropTypes.number,
  rowspan: PropTypes.string,
}

export default Grid
