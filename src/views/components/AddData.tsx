import React, { FormEvent, SetStateAction, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import { text } from 'stream/consumers';

interface IProps {}

interface IState {
  key: string;
  value: string;
}

export const AddData = () => {
  const [socketUrl] = useState('wss://echo.websocket.org');
  const [messageHistory, setMessageHistory] = useState([]);
  
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const {
    sendMessage,
    lastMessage,
    readyState,
  } = useWebSocket(socketUrl);

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
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

