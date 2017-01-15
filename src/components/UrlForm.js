import React from 'react'

const UrlForm = ({ onSubmit }) => {
  let input;
  return (
    <form
      onSubmit={ e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          onSubmit(input.value);
          input.value = '';
      }}
        >
      <input ref={node => { input = node; }} />
      <button type="submit">Validate</button>
    </form>
  );
};
export default UrlForm
