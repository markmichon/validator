import React from "react"
import ResultItem from "./ResultItem"
import styled from "styled-components"
import CodePreview from "../components/CodePreview"

const Container = styled.section`
  background-color: ${p => p.theme.light};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  transition: height .5s ease-in-out;
  width: 100%;
`
const List = styled.ul`
  padding: 0;
  margin: 1rem;
  max-height: 50vh;
  max-width: calc(50% - 1rem);
  overflow: scroll;
`

const ResultsList = ({ results, open = false, type }) => {
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
          {results.warnings
            ? results.warnings.map((result, i) =>
                <ResultItem key={i} data={result} type="warning" />
              )
            : null}
        </List>}

      {results.raw && <CodePreview raw={results.raw} />}
    </Container>
  )
}

export default ResultsList
