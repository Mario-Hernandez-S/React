import "./styles.css";

import React, {useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-dom'; //npm i react-router-dom@5.2.0 --save
import Register from './Register';

function App(){

  return (
    <BrowserRouter>
     <Switch>
      <Route path='/' component={Register} exact />
     </Switch>
    </BrowserRouter>
  );
}