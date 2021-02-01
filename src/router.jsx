import React from 'react';
import { Switch, Route } from 'react-router';
 
export default (
    // Switch is added in v4 react-router
    <Switch>
        <Route path='/' />
        <Route path='/media' />
        <Route path='/form' />
        <Route path='/map' />
        <Route path='/products' />
        <Route path='/aboutus' />
        <Route path='/impressum' />
        <Route path='/jobs' />
        <Route path='/prices' />



        <Route /> // No-match case
    </Switch>
);