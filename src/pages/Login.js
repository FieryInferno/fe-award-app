import React, {useState} from 'react';
import award from '../assets/award.svg';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [values, setValues] = useState();
  const {loading, loginAction} = useAuth();
  const login = (e) => {
    e.preventDefault();
    loginAction(values);
  };

  /* eslint-disable max-len */
  return (
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
                    <form onSubmit={login}>
                      <p className="mb-4 text-center">Enter your email address to sign in and continue</p>
                      <div className="mb-4">
                        <input
                          type="email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Email Address"
                          onChange={(e) => setValues({email: e.target.value})}
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-slate-700" type="submit" disabled={loading}>
                          {
                            loading ?
                              <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
                                <svg className="h-6 w-6 animate-spin stroke-white" viewBox="0 0 256 256">
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
                                <span className="text-xs font-medium text-white-500">Loading...</span>
                              </div> :
                              <>Sign in</>
                          }
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
};

export default Login;
