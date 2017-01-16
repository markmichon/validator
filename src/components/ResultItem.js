import React from 'react';

const ResultItem = ({ type, data, syntax}) => {
  if (syntax === "HTML") {
    // HTML
    return (
      <li className={ data.type === "error" ? "error" : "warning"}>
        {/* <span className="result__type">{data.type}</span> */}
        <span className="result__line-number">{data.lastLine || ""}</span>
        <span className="result__message">{data.message}</span>
      </li>
    );
  } else {
    // CSS
    return (
      <li className={ type === "error" ? "error" : "warning"}>
        {/* <span>{type}</span> */}
        <h3 className="result__line-number">{data.line || ""} - <code>{data.context}</code></h3>

        <span className="result__message">{data.message}</span>
        <code className="result__skipped-String">{data.skippedString}</code>
      </li>
    );
  }
}

export default ResultItem;
