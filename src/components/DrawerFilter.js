import React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import useAwards from '../hooks/useAwards';

import BadgeRemove from './BadgeRemove';
import Slider from './Slider';
import Checkboxes from './Checkboxes';
import Button from './Button';

import filter from '../assets/filter.svg';
import times from '../assets/times.svg';

/* eslint-disable max-len */
const DrawerFilter = ({param, ...props}) => {
  const {setFilterParam, filterParam} = props;
  const {getAwards} = useAwards();
  const [stateFilter, setStateFilter] = useState(false);

  const toggleFilter = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setStateFilter(open);
  };

  const filterAward = (e) => {
    e.preventDefault();
    getAwards({
      limit: 6,
      page: param,
      ...filterParam,
    });
    setStateFilter(false);
  };

  return (
    <>
      <img src={filter} className="w-4 text-right cursor-pointer" onClick={(toggleFilter(true))} />
      <Drawer
        anchor={'right'}
        open={stateFilter}
        onClose={toggleFilter(false)}
      >
        <Box
          sx={{width: 340}}
          role="presentation"
        >
          <form onSubmit={filterAward}>
            <div>
              <div className="flex justify-between p-4">
                <div className="font-bold text-xl">Filter</div>
                <div className="w-4 cursor-pointer" onClick={() => setStateFilter(false)}>
                  <img src={times} />
                </div>
              </div>
            </div>
            <div className="px-4">
              {filterParam.poin !== '10000' && <BadgeRemove badgeName={`Poin: 10000 - ${filterParam.poin}`} onClick={() => setFilterParam({
                ...filterParam,
                poin: '10000',
              })} />}
              {filterParam.type.length > 0 && <BadgeRemove badgeName={`Type: ${filterParam.type.join(', ')}`} onClick={() => setFilterParam({
                ...filterParam,
                type: [],
              })} />}
              {(filterParam.poin !== '10000' || filterParam.type.length > 0) &&
                <span className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium rounded border-2 border-blue-400 text-blue-800 mt-1 cursor-pointer" onClick={() => setFilterParam({
                  type: [],
                  poin: '10000',
                })}>
                  Clear All Filters
                </span>
              }
            </div>
            <div className="px-4 mt-4">
              <Slider {...props} />
            </div>
            <div className="px-4 mt-4">
              <h3 className="mb-4 font-semibold text-black">Award Type</h3>
              <ul className="w-48 text-sm font-medium text-blue-500 bg-white rounded-lg border border-gray-200">
                <Checkboxes {...props} />
              </ul>
            </div>
            <div className="mt-4 px-4">
              <Button type="submit" title="Filter" />
            </div>
          </form>
        </Box>
      </Drawer>
    </>
  );
};

DrawerFilter.propTypes = {
  setFilterParam: PropTypes.func,
  filterParam: PropTypes.object,
  param: PropTypes.number,
};

export default React.memo(DrawerFilter);
