import React, {useEffect, useState} from 'react';
import useAwards from '../hooks/useAwards';
import Header from '../components/Header';
import FeedAwards from '../components/FeedsAwards';
import PaginationRender from '../components/PaginationRender';

const Feed = () => {
  const {loading, awards, getAwards} = useAwards();
  const {rows} = awards;
  const [param, setParam] = useState(0);
  const [filterParam, setFilterParam] = useState({
    type: [],
    poin: '10000',
  });

  useEffect(() => {
    const {poin, type} = filterParam;
    getAwards({
      limit: 6,
      page: param,
      poin: poin === '10000' ? undefined : poin,
      type,
    });
  }, [param]);

  /* eslint-disable max-len */
  return (
    <>
      <Header setFilterParam={setFilterParam} filterParam={filterParam} param={param} />
      <main>
        <div>
          <FeedAwards loading={loading} rows={rows} />
          {rows.length !== 0 && <PaginationRender setParam={setParam} />}
        </div>
      </main>
    </>
  );
};

export default Feed;
