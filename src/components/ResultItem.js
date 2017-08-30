import React from "react"
import styled from "styled-components"

const Item = styled.li`
  list-style-type: none;
  margin-bottom: .25em;
  margin-top: .25em;
  background-color: ${p => p.theme.mid};
  border-radius: 0 0 .25rem .25rem;
  color: ${p => p.theme.copy};

  p {
    margin: 0;
  }
`

const LineNumber = styled.span`
  margin-right: .25rem;
  font-weight: bold;
`

const Code = styled.code`
  background-color: ${p => p.theme.dark};
  padding: .25rem .5rem;
  line-height: 1.6;
`

const Context = styled.span`
  color: hsla(0, 0%, 35%, 1.00);
  font-size: .825rem;
`

const InfoTab = styled.div`
  border-radius: .25rem .25rem 0 0;
  ${p =>
    p.type === "error"
      ? `background-color: ${p.theme.error};`
      : p.type === "warning"
        ? `background-color: ${p.theme.warning};`
        : p.type === "notice"
          ? `background-color: ${p.theme.notice};`
          : `background-color: hsla(223, 13%, 20%, 1.00);`} padding: .5rem 1rem;
`
const InfoBody = styled.div`padding: .5rem 1rem;`

const ResultItem = ({ type, data, syntax }) => {
  return (
    <Item>
      <InfoTab type={type}>
        {data.lastLine ||
          (data.line &&
            <LineNumber>
              {data.lastLine || data.line || `Global`}
            </LineNumber>)}
        {data.context &&
          <Context>
            {data.context}
          </Context>}
      </InfoTab>
      <InfoBody>
        <p>
          {data.message}{" "}
          {data.skippedString &&
            <Code>
              {data.skippedString}
            </Code>}
        </p>
      </InfoBody>
    </Item>
  )
}

export default ResultItem
