import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable max-len */
const Slider = ({setFilterParam, filterParam}) => (
  <>
    <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-blue-500">Poin Needed</label>
    <div className="flex justify-between">
      <div className="font-bold text-lg text-blue-500">IDR 10.000</div>
      <div className="font-bold text-lg text-blue-500">IDR 500.000</div>
    </div>
    <input
      type="range"
      className="w-full h-2 bg-blue-400 rounded-lg appearance-none cursor-pointer"
      onChange={(e) => setFilterParam((prevState) => {
        return {
          ...prevState,
          poin: e.target.value,
        };
      })}
      min="10000"
      max="500000"
      value={filterParam.poin}
    />
  </>
);

Slider.propTypes = {
  setFilterParam: PropTypes.func,
  filterParam: PropTypes.object,
};

export default React.memo(Slider);
