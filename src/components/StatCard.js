import React from "react"
import styled from "styled-components"

const getTypeColor = type => {
  switch (type) {
    case "error":
      return `hsla(359, 74%, 78%, 1.00)`
    case "warning":
      return `hsla(35, 93%, 72%, 1.00)`

    case "notice":
      return `hsla(205, 68%, 90%, 1.00)`

    default:
      return `inherit`
  }
}

const Card = styled.div`
  padding: 1rem;
  margin: .5rem;
  background-color: #fff;
  border: 1px solid #efefef;
  border-radius: .25rem;
  width: 250px;
  display: flex;
  transition: transform .5s ease-in-out, box-shadow .7s ease-in-out;
  cursor: pointer;

  ${props =>
    props.active &&
    `
  cursor: default;
  transform: scale(1.1);
  box-shadow: 0 2px 2px #ccc;
  `};
`

const CardItems = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`
const CardItem = styled.li`
  margin-right: .5rem;
  color ${p => getTypeColor(p.type)};
  
`

const Count = styled.p`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
  margin: 0;
  padding: 0;
  color: inherit;
`
const Type = styled.p`
  margin: 0;
  padding: 0;
  color: inherit;
  line-height: 1;
`
const Title = styled.h2`
  margin: 0;
  padding: 0 1rem 0 0;
  line-height: 1;
  align-self: center;
`

const StatCard = ({ title, items, active, onClick }) =>
  <Card active={active} onClick={() => onClick(title)}>
    <Title>
      {title}
    </Title>
    <CardItems>
      {items &&
        items.map((item, i) =>
          <CardItem key={i} type={item.type}>
            <Count>
              {item.count}
            </Count>
            <Type>
              {item.count < 2 ? `${item.type} ` : `${item.type}s`}
            </Type>
          </CardItem>
        )}
    </CardItems>
  </Card>

export default StatCard
