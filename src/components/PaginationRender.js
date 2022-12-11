import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import useAwards from '../hooks/useAwards';

/* eslint-disable max-len */
const PaginationRender = ({setParam}) => {
  const {awards} = useAwards();
  const {page, rows, total, limit} = awards;
  const pagination = useMemo(() => {
    const pagination = [];
    const end = page <= 2 ? 4 : page + 2;

    for (let index = page <= 2 ? 0 : page - 2; index < Math.ceil(total / limit); index++) {
      if (index > end) {
        break;
      }

      pagination.push(
        page === index ?
          <li key={index}>
            <button aria-current="page" className="px-3 py-2 leading-tight text-black border border-neutral-800 bg-blue-500 hover:bg-blue-100 hover:text-blue-700">{index + 1}</button>
          </li> :
          <li key={index}>
            <button className="px-3 py-2 leading-tight text-black bg-neutral-400 border border-neutral-800 hover:bg-gray-100 hover:text-gray-700" onClick={() => setParam(index)}>{index + 1}</button>
          </li>,
      );
    };

    return pagination;
  }, [page, rows, total, limit]);

  return (
    <article className="mt-4 text-center">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
          <li>
            <button className="px-3 py-2 ml-0 leading-tight text-black bg-neutral-400 border border-neutral-800 rounded-l-lg hover:bg-gray-100 hover:text-gray-700" disabled={page === 0} onClick={() => setParam((prevParam) => prevParam - 1)}>Previous</button>
          </li>
          {pagination}
          <li>
            <button className="px-3 py-2 leading-tight text-black bg-neutral-400 border border-neutral-800 rounded-r-lg hover:bg-gray-100 hover:text-gray-700" onClick={() => setParam((prevParam) => prevParam + 1)} disabled={Math.ceil(total / limit) === page + 1}>Next</button>
          </li>
        </ul>
      </nav>
    </article>
  );
};

PaginationRender.propTypes = {setParam: PropTypes.func};

export default React.memo(PaginationRender);
