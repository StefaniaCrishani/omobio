import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';


import login from './ui/login';
import Signup from './ui/Singnup';

//import NotFound from '././components/NotFound/NotFound';


const Routes = () => (
  <BrowserRouter >
      <Switch>
          
          <Route path="/login" component={login}/>
          
          
         
      </Switch>
  </BrowserRouter>
);

export default Routes