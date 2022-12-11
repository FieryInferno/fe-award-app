import React from 'react';
import empty from '../assets/empty.svg';

const NotFoundAward = () => (
  <div className="flex flex-col">
    <div className="basis-full flex justify-center">
      <img src={empty} className="w-16" />
    </div>
    <div className="basis-full text-center">
      <div>No Awards Found</div>
    </div>
  </div>
);

export default NotFoundAward;
