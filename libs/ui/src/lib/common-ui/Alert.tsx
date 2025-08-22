import * as React from 'react';
export interface IAlertProps {
    message: string;
}

export default function App (props: IAlertProps) {
  return (
    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
      testing...
    </div>
  );
}
