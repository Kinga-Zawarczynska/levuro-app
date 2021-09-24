import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import Main from './components/Main'
import LoginPage from './components/LoginPage';
import { MAIN } from './constants/flows';
import './App.css';
import { setFlow } from './state-management/actions/flowActions';


function App() {
  const [rememberedUserToken, setRememberedUserToken] = useState(localStorage.getItem('userToken'))
  const newUserLoggedIn = useSelector(({ user }) => user.isLoggedIn)
  const dispatch = useDispatch();

  useEffect(() => {
    setRememberedUserToken(localStorage.getItem('userToken'))
    dispatch(setFlow(MAIN))

  }, [dispatch])
    
  return (
    <ErrorBoundary>
      {newUserLoggedIn || rememberedUserToken ? <Main setRememberedUserToken={setRememberedUserToken} /> : <LoginPage />}
    </ErrorBoundary>
    
  );
}

export default App;

