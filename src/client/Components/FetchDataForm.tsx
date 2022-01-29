import React from 'react';
import { useState } from 'react';
import { Get } from '../Services';
import { apiRoute } from '../utils';

export const FetchDataForm = (): JSX.Element => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    try {
        const res: { value: string } = await Get(apiRoute.getRoute(`hash/${key}`));
        setValue(res.value);
    } catch (e: any) {
      setValue(e.message);
    }

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
        <br />
        <label>Value: {value}</label>
      </form>
    </div>
  );
};
