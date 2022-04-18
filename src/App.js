import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import Landingpage from './components/Landingpage'
import { login, logout, selectuser } from './features/userSlice';
import { auth } from './Firebase';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Profiles from './components/Profiles';


function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else {
        // logged out
        dispatch(logout());
      }
    });
    return unsubcribe;
  }, [dispatch])
  return (
    <div className="app">
      <Router>
        {!user ? (<>
          <Landingpage />
        </>) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profiles/>
            </Route>  
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
