import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Main from './components/Main'
import './App.css';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <ErrorBoundary>
      {/* <Main /> */}
      <LoginPage />
    </ErrorBoundary>
  );
}

export default App;

