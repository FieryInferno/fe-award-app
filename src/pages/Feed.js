import React from 'react';
import list from '../assets/list.svg';
import filter from '../assets/filter.svg';
import empty from '../assets/empty.svg';

/* eslint-disable max-len */
const Feed = () => (
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
          <div className="flex flex-col justify-center">
            <div className="basis-full">
              <img src={empty} className="w-16" />
            </div>
            <div className="basis-full">
              <div>No Awards Found</div>
            </div>
          </div>
          <div>
            <div className="border-2 border-neutral-800 rounded-lg bg-neutral-400 h-32 p-2 mx-4">
              <div>
                <span className="bg-blue-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded float-right">Vouchers</span>
              </div>
              <div className="mt-20 font-bold">
                500.000 Poin
              </div>
            </div>
            <div className="font-bold ml-4 text-lg">
              Gift Card IDR 1.000.000
            </div>
          </div>
        </article>
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
      </div>
    </main>
  </>
);

export default Feed;
