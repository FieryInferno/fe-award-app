import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable max-len */
const Menu = ({onClick, name}) => (
  <li>
    <a href="#" className="flex items-center p-2 text-base font-normal text-blue-500 rounded-lg hover:bg-gray-100" onClick={onClick}>
      <span className="ml-3">{name}</span>
    </a>
  </li>
);

Menu.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default React.memo(Menu);
