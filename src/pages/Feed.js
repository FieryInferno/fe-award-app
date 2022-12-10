import React, {useEffect} from 'react';
import list from '../assets/list.svg';
import filter from '../assets/filter.svg';
import empty from '../assets/empty.svg';
import useAwards from '../hooks/useAwards';

/* eslint-disable max-len */
const awardType = {
  'Vouchers': 'bg-blue-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded float-right',
  'Products': 'bg-orange-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded float-right',
  'Giftcards': 'bg-green-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded float-right',
};

const Feed = () => {
  const {loading, awards, getAwards} = useAwards();

  useEffect(() => {
    getAwards({
      limit: 6,
      page: 0,
    });
  }, []);

  return (
    <>
      <header className="bg-white h-16 p-4">
        <div className="flex justify-between">
          <div>
            <img src={list} className="w-4" />
          </div>
          <div>
            <strong>Awards</strong>
          </div>
          <div>
            <img src={filter} className="w-4 text-right" />
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <article className="grid grid-cols-1 gap-4">
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

            {awards?.rows.length !== 0 ? awards?.rows.map(({type, point, name}, key) =>
              <div key={key}>
                <div className="border-2 border-neutral-800 rounded-lg bg-neutral-400 h-32 p-2 mx-4">
                  <div>
                    <span className={awardType[type]}>{type}</span>
                  </div>
                  <div className="mt-20 font-bold">
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
          {awards?.rows.length !== 0 &&
            <article className="mt-4 text-center">
              <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px">
                  <li>
                    <a href="#" className="px-3 py-2 ml-0 leading-tight text-black bg-neutral-400 border border-neutral-800 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
                  </li>
                  <li>
                    <a href="#" className="px-3 py-2 leading-tight text-black bg-neutral-400 border border-neutral-800 hover:bg-gray-100 hover:text-gray-700">1</a>
                  </li>
                  <li>
                    <a href="#" className="px-3 py-2 leading-tight text-black bg-neutral-400 border border-neutral-800 hover:bg-gray-100 hover:text-gray-700">2</a>
                  </li>
                  <li>
                    <a href="#" aria-current="page" className="px-3 py-2 text-bluneutral-400 border border-neutral-800 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                  </li>
                  <li>
                    <a href="#" className="px-3 py-2 leading-tight text-black bg-neutral-400 border border-neutral-800 hover:bg-gray-100 hover:text-gray-700">4</a>
                  </li>
                  <li>
                    <a href="#" className="px-3 py-2 leading-tight text-black bg-neutral-400 border border-neutral-800 hover:bg-gray-100 hover:text-gray-700">5</a>
                  </li>
                  <li>
                    <a href="#" className="px-3 py-2 leading-tight text-black bg-neutral-400 border border-neutral-800 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
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
