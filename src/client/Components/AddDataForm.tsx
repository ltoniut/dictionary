import React, { useState } from 'react';
// import useWebSocket from 'react-use-websocket';

export const AddDataForm = (): JSX.Element => {
  const [socketUrl] = useState('http://localhost:8080');
  
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
/*
  const {
    sendMessage,
    lastMessage,
    readyState,
  } = useWebSocket(socketUrl);
*/
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    const data = { key, value };
    // Submit to webSocket
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
        </form>
      </div>
    );
}
