import React, { useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export const AddDataForm = (): JSX.Element => {
  const [socketUrl] = useState('http://localhost:8080');
  
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const {
    sendJsonMessage,
  } = useWebSocket(socketUrl);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    const data = { key, value };
    sendJsonMessage({name: 'addHash', params: { data }});
    alert('An entry was submitted: ' + key);

    event.preventDefault();
  };

    return (
      <div>
        <h2>Add hash</h2>
        <form id="form">
          <span>
            Key:{''}
            <input
              type="text"
              value={key}
              onChange={text => setKey(text.target.value)}
            />
          </span>
          <br />
          <span>
            Value:{' '}
            <input
              type="text"
              value={value}
              onChange={text => setValue(text.target.value)}
            />
          </span>
          <br />
          <span>
            <input type="button" value="Submit" onClick={handleSubmit} />
          </span>
          <br />
        </form>
      </div>
    );
}
