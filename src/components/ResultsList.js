import React from 'react';
import ResultItem from './ResultItem'


const ResultsList = ({ title, results }) => (
    <section className="results-container">
      <header className="results-header">
        <h2>{title}</h2>
        <div className="results-header__group">
          <div className="results-header__group-item">
            <span className="warning-count">{results.warnings ? results.warnings.length : "0"}</span>
            Warnings
          </div>
          <div className="results-header__group-item">
            <span className="error-count">{results.errors ? results.errors.length : "0"}</span>
            Errors
          </div>
        </div>
      </header>
      <ul className="results-list">
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
      </ul>
    </section>
  );


export default ResultsList
