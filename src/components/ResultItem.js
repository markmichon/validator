import React from 'react';

const ResultItem = ({ type, data, syntax}) => {
  if (syntax === "HTML") {
    // HTML
    return (
      <li className={ data.type === "error" ? "error" : "warning"}>
        <span className="result__type">{data.type}</span>
        <span className="result__line-number">{data.lastLine || ""}</span>
        <span className="result__message">{data.message}</span>
      </li>
    );
  } else {
    // CSS
    return (
      <li className={ type === "error" ? "error" : "warning"}>
        {/* <span>{type}</span> */}
        <span>{data.context}</span>
        <span className="result__line-number">{data.line || ""}</span>
        <span className="result__message">{data.message}</span>
        <span className="result__skipped-String"><code>{data.skippedString}</code></span>
      </li>
    );
  }
}

export default ResultItem;
