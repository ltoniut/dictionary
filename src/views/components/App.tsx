import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { AddData } from './AddData';
import { FetchData } from './FetchData';

export const App = () => {
  return(
    <div>
      <AddData />
      <FetchData />
    </div>
  );
}
