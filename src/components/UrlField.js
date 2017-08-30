import React from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"

const enlarge = keyframes`
0% {
  transform: scale(1);
}
100% {
  transform: scale(1.5);
}`

const rotate = keyframes`
to {
  transform: rotate(360deg);
}`

const dash = keyframes`
0% {
  stroke-dasharray: 250, 250;
  stroke-dashoffset: 0;
}
100% {
  stroke-dasharray: 250, 250;
  stroke-dashoffset: -500;
}`

const flatten = keyframes`
100% {
  width:0;
}`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 40rem;
  border: 1px solid #dee2e6;
  background-color: ${props => (props.disabled ? "#ced4da" : "#e9ecef")};
  border-radius: .25rem;
  padding: .25rem;
  margin: 0 auto 1rem;
`

const Label = styled.label`display: none;`

const Input = styled.input`
  width: calc(100% - 3rem);
  height: 100%;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  padding: .5rem 1rem;
  outline: none;
  margin: 0;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  border-radius: .25rem;
  width: 3rem;
  margin: 0;
  font-size: 1.5rem;
  display: block;
  padding: .5rem .5rem;

  .search-circle {
    stroke: #868e96;
  }
  .search-handle {
    fill: #868e96;
  }

  &:hover {
    background-color: hsl(206, 83%, 58%);
  }
  &:hover .search-handle {
    fill: #fff;
  }
  &:hover .search-circle {
    stroke: #fff;
  }
`

const SVG = styled.svg`
  display: block;
  transition: transform .25s;
  transform-origin: center center;
  margin: 0;
  height: 1.5rem;
  width: 100%;

  ${props =>
    props.isAnimating &&
    `
animation: ${rotate} 5s linear infinite, ${enlarge} 1s ease-in-out forwards 1;
.search-circle {
  stroke-linecap: round;
  animation: ${dash} 1.5s .2s ease-in-out infinite;
}
.search-handle {
  animation: ${flatten} .25s ease forwards;
}`};
`

const SearchIcon = props =>
  <SVG viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Search</title>
    <rect
      x="100"
      y="100"
      width="40"
      height="20"
      transform="translate(110 -50) rotate(45)"
      className="search-handle"
    />
    <circle
      cx="75"
      cy="75"
      r="40"
      fill="none"
      strokeWidth="16px"
      className="search-circle"
    />
  </SVG>

const UrlField = ({ controlFunc, isLoading }) => {
  return (
    <Container>
      <Label htmlFor="url" aria-hidden="true">
        Enter a URL to validate
      </Label>

      <Input
        name="url"
        id="url"
        onChange={controlFunc}
        // disabled={isLoading}
        autoComplete="off"
        tabIndex={1}
      />

      <Button type="submit">
        <SearchIcon size="100%" isAnimating={isLoading} />
      </Button>
    </Container>
  )
}
export default UrlField
