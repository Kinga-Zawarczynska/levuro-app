import React from 'react';
import { useSelector } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import Main from './components/Main'
import LoginPage from './components/LoginPage';
import './App.css';


function App() {
  const newUserLoggedIn = useSelector(({ user }) => user.isLoggedIn)
  const userIsStillLoggedIn = localStorage.getItem('userToken')
  return (
    <ErrorBoundary>
      {newUserLoggedIn || userIsStillLoggedIn ? <Main /> : <LoginPage />}
    </ErrorBoundary>
  );
}

export default App;

