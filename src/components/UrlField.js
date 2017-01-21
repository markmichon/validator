import React from 'react'
import classNames from 'classnames';
import SearchIcon from './SearchIcon';

const UrlField = ({ controlFunc, isLoading }) => {
  let input;
  return (
    <div className={classNames('validation-form', {'disabled': false})}>
      <label className="hidden" htmlFor="url" aria-hidden="true">Enter a URL to validate</label>

      <input
        name="url"
        id="url"
        className="input-primary"
        onChange={controlFunc}
        // disabled={isLoading}
        autoComplete="off"
      />

      <button className="button-primary" type="submit"><SearchIcon size="100%" isAnimating={isLoading}/></button>
    </div>
  );
};
export default UrlField
