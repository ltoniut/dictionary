import React from 'react';
import { AddDataForm } from './AddDataForm';
import { FetchDataForm } from './FetchDataForm';

export const AppForm = (): JSX.Element => {
  return(
    <div>
      <AddDataForm />
      <FetchDataForm />
    </div>
  );
}
