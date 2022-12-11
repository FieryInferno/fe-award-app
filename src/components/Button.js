import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable max-len */
const Button = ({type, title}) => (
  <button type={type} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none w-full">{title}</button>
);

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
};

export default React.memo(Button);
