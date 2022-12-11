import React, {useEffect, useMemo, useState} from 'react';
import useAwards from '../hooks/useAwards';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useNavigate} from 'react-router-dom';
import {logout} from '../slices/auth.slice';
import {useDispatch} from 'react-redux';

import list from '../assets/list.svg';
import filter from '../assets/filter.svg';
import empty from '../assets/empty.svg';
import award from '../assets/award.svg';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

/* eslint-disable max-len */
const awardType = {
  'Vouchers': 'bg-blue-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded float-right',
  'Products': 'bg-orange-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded float-right',
  'Giftcards': 'bg-green-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded float-right',
};

const Feed = () => {
  const {loading, awards, getAwards} = useAwards();
  const {page, rows, total, limit} = awards;
  const [param, setParam] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterParam, setFilterParam] = useState({
    type: [],
    poin: '10000',
  });

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

  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

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

  useEffect(() => {
    const {poin, type} = filterParam;
    getAwards({
      limit: 6,
      page: param,
      poin: poin === '10000' ? undefined : poin,
      type,
    });
  }, [param]);

  return (
    <>
      <header className="bg-white h-16 p-4">
        <div className="flex justify-between">
          <div>
            <img src={list} className="w-4" onClick={(toggleDrawer(true))} style={{cursor: 'pointer'}} />
            <Drawer
              anchor={'left'}
              open={state}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{width: 250}}
                role="presentation"
              >
                <div>
                  <img className="mx-auto mt-8 w-48" src={award} alt="logo" />
                </div>
                <div className="text-center">
                  <h1 className="text-2xl">
                    <strong>Awards Menu</strong>
                  </h1>
                </div>
                <div>
                  <aside className="w-64" aria-label="Sidebar">
                    <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded">
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="flex items-center p-2 text-base font-normal text-blue-500 rounded-lg hover:bg-gray-100" onClick={(e) => setState(false)}>
                            <span className="ml-3">Home</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center p-2 text-base font-normal text-blue-500 rounded-lg hover:bg-gray-100">
                            <span className="flex-1 ml-3 whitespace-nowrap">Cards</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center p-2 text-base font-normal text-blue-500 rounded-lg hover:bg-gray-100">
                            <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center p-2 text-base font-normal text-blue-500 rounded-lg hover:bg-gray-100" onClick={() => {
                            dispatch(logout())
                                .unwrap()
                                .then(() => navigate('/login'));
                          }}>
                            <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </Box>
            </Drawer>
          </div>
          <div>
            <strong>Awards</strong>
          </div>
          <div>
            <img src={filter} className="w-4 text-right" onClick={(toggleFilter(true))} style={{cursor: 'pointer'}} />
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
                      <div className="w-4 cursor-pointer" onClick={() => setStateFilter(false)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></div>
                    </div>
                  </div>
                  <div className="px-4">
                    {filterParam.poin !== '10000' &&
                      <span className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium rounded border-2 border-blue-400 text-blue-800">
                        Poin: 10000 - {filterParam.poin}
                        <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900" onClick={() => setFilterParam({
                          ...filterParam,
                          poin: '10000',
                        })}>
                          <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          <span className="sr-only">Remove badge</span>
                        </button>
                      </span>
                    }

                    {filterParam.type.length > 0 &&
                      <span className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium rounded border-2 border-blue-400 text-blue-800 mt-1">
                        Type: {filterParam.type.join(', ')}
                        <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900" onClick={() => setFilterParam({
                          ...filterParam,
                          type: [],
                        })}>
                          <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          <span className="sr-only">Remove badge</span>
                        </button>
                      </span>
                    }

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
                    <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-blue-500">Poin Needed</label>
                    <div className="flex justify-between">
                      <div className="font-bold text-lg text-blue-500">IDR 10.000</div>
                      <div className="font-bold text-lg text-blue-500">IDR 500.000</div>
                    </div>
                    <input
                      type="range"
                      className="w-full h-2 bg-blue-400 rounded-lg appearance-none cursor-pointer"
                      onChange={(e) => setFilterParam({
                        ...filterParam,
                        poin: e.target.value,
                      })}
                      min="10000"
                      max="500000"
                      value={filterParam.poin}
                    />
                  </div>
                  <div className="px-4 mt-4">
                    <h3 className="mb-4 font-semibold text-black">Award Type</h3>
                    <ul className="w-48 text-sm font-medium text-blue-500 bg-white rounded-lg border border-gray-200">
                      {['All Type', 'Vouchers', 'Products', 'Others'].map((typeAward, key) =>
                        <li className="w-full rounded-t-lg border-b border-gray-200" key={key}>
                          <div className="flex items-center pl-3">
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
                          </div>
                        </li>,
                      )}
                    </ul>
                  </div>
                  <div className="mt-4 px-4">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none w-full">Filter</button>
                  </div>
                </form>
              </Box>
            </Drawer>
          </div>
        </div>
      </header>
      <main>
        <div>
          <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {loading &&
              <div className="flex space-x-2 justify-center">
                <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
                  <svg className="h-6 w-6 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                    <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line
                      x1="195.9"
                      y1="60.1"
                      x2="173.3"
                      y2="82.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"></line>
                    <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line
                      x1="195.9"
                      y1="195.9"
                      x2="173.3"
                      y2="173.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"></line>
                    <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line
                      x1="60.1"
                      y1="195.9"
                      x2="82.7"
                      y2="173.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"></line>
                    <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line
                      x1="60.1"
                      y1="60.1"
                      x2="82.7"
                      y2="82.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"></line>
                  </svg>
                  <span className="text-xs font-medium text-gray-500">Loading...</span>
                </div>
              </div>
            }

            {rows.length !== 0 ? rows.map(({type, point, name, image}, key) =>
              <div key={key}>
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
              </div>,
            ) :
              <div className="flex flex-col">
                <div className="basis-full flex justify-center">
                  <img src={empty} className="w-16" />
                </div>
                <div className="basis-full text-center">
                  <div>No Awards Found</div>
                </div>
              </div>
            }
          </article>
          {rows.length !== 0 &&
            <article className="mt-4 text-center">
              <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px">
                  <li>
                    <button className="px-3 py-2 ml-0 leading-tight text-black bg-neutral-400 border border-neutral-800 rounded-l-lg hover:bg-gray-100 hover:text-gray-700" disabled={page === 0} onClick={() => setParam(param - 1)}>Previous</button>
                  </li>
                  {pagination}
                  <li>
                    <button className="px-3 py-2 leading-tight text-black bg-neutral-400 border border-neutral-800 rounded-r-lg hover:bg-gray-100 hover:text-gray-700" onClick={() => setParam(param + 1)} disabled={Math.ceil(total / limit) === page + 1}>Next</button>
                  </li>
                </ul>
              </nav>
            </article>
          }
        </div>
      </main>
    </>
  );
};

export default Feed;
