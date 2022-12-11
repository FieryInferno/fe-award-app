import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

/* eslint-disable max-len */
const awardType = {
  'Vouchers': 'bg-blue-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded float-right',
  'Products': 'bg-orange-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded float-right',
  'Giftcards': 'bg-green-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded float-right',
};

const Award = ({type, point, name, image}) => (
  <div>
    <div className="border-2 border-neutral-800 rounded-lg bg-neutral-400 h-fit p-2 mx-4">
      <div>
        <span className={awardType[type]}>{type}</span>
      </div>
      <div>
        <LazyLoadImage
          height={384}
          src={`http://localhost:5000/${image}`}
          width={384}
          alt="Image Alt"
        />
      </div>
      <div className="font-bold">
        {point} Poin
      </div>
    </div>
    <div className="font-bold ml-4 text-lg">
      {name}
    </div>
  </div>
);

Award.propTypes = {
  type: PropTypes.string,
  point: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};

export default React.memo(Award);
