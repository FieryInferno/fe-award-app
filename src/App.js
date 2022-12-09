import React from 'react';
import award from './assets/award.svg';

/* eslint-disable max-len */
const App = () => (
  <section className="h-full gradient-form bg-gray-200 md:h-screen">
    <div className="py-12 px-6 h-full">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div className="xl:w-10/12">
          <div className="block bg-white shadow-lg rounded-lg">
            <div className="g-0">
              <div className="lg:w-6/12 px-4 md:px-0">
                <div className="md:p-12 md:mx-6">
                  <div className="text-center">
                    <img className="mx-auto w-48" src={award} alt="logo" />
                    <h1 className="text-xl font-semibold mt-1 mb-12 pb-1">AWARD</h1>
                  </div>
                  <form>
                    <p className="mb-4 text-center">Enter your email address to sign in and continue</p>
                    <div className="mb-4">
                      <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email Address" />
                    </div>
                    <div className="text-center pt-1 mb-12 pb-1">
                      <button className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-slate-700" type="button">
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default App;
