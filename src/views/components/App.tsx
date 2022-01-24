import React, { Component } from 'react';
import { AddDataForm } from './AddDataForm';
import { FetchDataForm } from './FetchDataForm';

export const App = () => {
  return(
    <div>
      <AddDataForm />
      <FetchDataForm />
    </div>
  );
}
