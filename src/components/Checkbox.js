import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable max-len */
const Checkbox = ({setFilterParam, filterParam, typeAward}) => (
  <>
    <input
      type="checkbox"
      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
      onChange={(e) => {
        let type = filterParam.type;

        if (e.target.checked) type.push(typeAward);
        else type = type.filter((type) => type !== typeAward);

        setFilterParam({
          ...filterParam,
          type,
        });
      }}
      checked={filterParam.type.includes(typeAward)}
    />
    <label className="py-3 ml-2 w-full text-sm font-medium text-blue-500">{typeAward}</label>
  </>
);

Checkbox.propTypes = {
  setFilterParam: PropTypes.func,
  filterParam: PropTypes.object,
  typeAward: PropTypes.string,
};

export default React.memo(Checkbox);
