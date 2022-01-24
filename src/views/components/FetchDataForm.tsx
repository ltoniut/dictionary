import { useState } from 'react';

export const FetchDataForm = () => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    // GET value
    setValue('');

    event.preventDefault();
  };

  return (
    <div>
      <h2>Add hash</h2>
      <form id="form">
        <span>
          Key: <input type="text" value={key} onChange={ text => setKey(text.target.value)} />
        </span>
        <br />
        <span>
          <input type="button" value="Submit" onClick={handleSubmit} />
        </span>
        <label>Value: {value}</label>
      </form>
    </div>
  );
};
