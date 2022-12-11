import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../components/Loading';
import Award from '../components/Award';
import NotFoundAward from '../components/NotFoundAward';

/* eslint-disable max-len */
const FeedsAwards = ({loading, rows}) => (
  <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {loading && <Loading />}
    {rows.length !== 0 ? rows.map((row, key) => <Award key={key} {...row} />) : <NotFoundAward />}
  </article>
);

FeedsAwards.propTypes = {
  loading: PropTypes.bool,
  rows: PropTypes.array,
};

export default React.memo(FeedsAwards);
