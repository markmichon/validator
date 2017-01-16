import React from 'react'

const Embed = ({ url, width, height }) => {
  let styles = {
    width: width + 'px',
    height: height + 'px'
  }

  return (
    <section style={styles}>
      <header className="results-header">
        <h2>{width + "x" + height}</h2>
      </header>
      <iframe src={url}></iframe>
    </section>
  )

}

export default Embed;
