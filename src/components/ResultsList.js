import React from 'react';
import ResultItem from './ResultItem'


const ResultsList = ({ title, results }) => {
  let valid = !results.warnings && !results.errors ? true : false;
  return (
    <section className="results-container">
      <header className="results-header">
        <h2>{title}</h2>
        { !valid && <div className="results-header__group">
          {results.warnings && <div className="results-header__group-item">
            <span className="warning-count">{results.warnings ? results.warnings.length : "0"}</span>
            Warnings
          </div>}
          {results.errors && <div className="results-header__group-item">
            <span className="error-count">{results.errors ? results.errors.length : "0"}</span>
            Errors
          </div>}
        </div>}
        { valid && <div className="results-header__group">No Errors!</div> }
      </header>
      { !valid && <ul className="results-list">
        {results.errors ? results.errors.map((result, i) =>
          <ResultItem
            key={i}
            data={result}
            type="error"
            syntax={results.resultType}
          />
        ) : null}
        {results.warnings ? results.warnings.map((result, i) =>
          <ResultItem
            key={i}
            data={result}
            type="warning"
          />
        ) : null}
      </ul>}
    </section>
  );
}


export default ResultsList
