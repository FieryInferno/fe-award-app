import React from 'react';
import Checkbox from './Checkbox';

/* eslint-disable max-len */
const Checkboxes = (props) => {
  return (
    ['All Type', 'Vouchers', 'Products', 'Others'].map((typeAward, key) =>
      <li className="w-full rounded-t-lg border-b border-gray-200" key={key}>
        <div className="flex items-center pl-3">
          <Checkbox typeAward={typeAward} {...props} />
        </div>
      </li>,
    )
  );
};

export default React.memo(Checkboxes);
