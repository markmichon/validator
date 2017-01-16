import React from 'react';

const ResultItem = ({ type, data, syntax}) => {
  let typeString = (type === "error") ? "Error" : "Warning";
  let typeClass = (type === "error") ? "error" : "warning";

  if (syntax === "HTML") {
    // HTML
    return (
      <li className={ typeClass }>
        <p>
          <span className={typeClass + " result-type"}>{ typeString }</span>
          { data.lastLine && <span className="result-line-number">{data.lastLine}</span>}
        </p>
        <p className="result-message">{data.message}</p>
      </li>
    );
  } else {
    // CSS

    return (
      <li className={ typeClass }>
        <p>
          <span className={typeClass + " result-type"}>{ typeString }</span> {data.line && <span className="result-line-number">{data.line}</span>} { data.context && <code>{data.context}</code>}
        </p>

        <p className="result-message">{data.message} {data.skippedString && <code className="result-skipped-String">{data.skippedString}</code>}</p>

      </li>
    );
  }
}

export default ResultItem;
