/* eslint-disable react/prop-types */
import React from 'react';
import {Routes, Route, Navigate, useLocation} from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';
import useAuth from './hooks/useAuth';

const App = () => {
  const {user} = useAuth();
  const isExpiredJWT = (token) => {
    try {
      const tokenData = token.split('.')[1];
      const decodedJWT = JSON.parse(atob(tokenData));
      const dateNow = new Date();
      const miliseconds = dateNow.getTime() / 1000;

      return decodedJWT.exp < miliseconds ? true : false;
    } catch (error) {
      return false;
    }
  };
  const PublicRoute = ({children}) => {
    return user?.token !== undefined && !isExpiredJWT(user?.token) ?
      <Navigate to="/awards" /> :
      children;
  };
  const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const {pathname} = location;

    if (user?.token === undefined || isExpiredJWT(user?.token)) {
      localStorage.setItem('lastLocation', pathname);
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Routes>
      <Route path="/">
        <Route index element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
      </Route>

      <Route path="/">
        <Route index element={
          <ProtectedRoute>
            <Feed />
          </ProtectedRoute>
        } />
        <Route path="/awards" element={
          <ProtectedRoute>
            <Feed />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  );
};

export default App;
