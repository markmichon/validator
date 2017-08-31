import React from "react"
import ResultItem from "./ResultItem"
import styled from "styled-components"

const Container = styled.section`
  background-color: ${p => p.theme.light};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  transition: height .5s ease-in-out;
  height: 0;
  width: 100%;
  ${p =>
    p.open
      ? `
    height:500px;
    border-top: 1px solid ${p.theme.dark};
    border-bottom: 1px solid ${p.theme.dark};
  `
      : `
   height: 0;
   `};
`
const List = styled.ul`
  padding: 0;
  margin: 1rem;
  max-width: 43rem;
`

const ResultsList = ({ results, open = false }) => {
  let valid = !results.warnings && !results.errors ? true : false
  return (
    <Container open={open}>
      {!valid &&
        <List>
          {results.errors
            ? results.errors.map((result, i) =>
                <ResultItem
                  key={i}
                  data={result}
                  type="error"
                  syntax={results.resultType}
                />
              )
            : null}
        </List>}
      {!valid &&
        <List>
          {results.warnings
            ? results.warnings.map((result, i) =>
                <ResultItem key={i} data={result} type="warning" />
              )
            : null}
        </List>}
      <div>
        <pre>
          <code>
            {results.raw}
          </code>
        </pre>
      </div>
    </Container>
  )
}

export default ResultsList
