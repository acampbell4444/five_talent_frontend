'use strict'

import React from 'react';
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-hooks'
import {IndexRedirect} from 'react-router'
import store from './store'

import App from './App'
import AddHouseContainer from './containers/AddHouseContainer'
import IndexHouseContainer from './containers/IndexHouseContainer'
import EditHouseContainter from './containers/EditHouseContainer'

import { getAllHouses } from './reducers/house'

const IndexHouseEnter = () => {
	store.dispatch(getAllHouses())
}

render(
	<Provider store={store}>
	  <Router>
	      <div>
	        <Route exact path='/' component={IndexHouseContainer} onEnter={IndexHouseEnter} />
	        <Route path='/add-house' component={AddHouseContainer} />
	        <Route path='/edit-house' component={EditHouseContainter} />
	      </div>
	  </Router>
	 </Provider>,
  document.getElementById('root')
);
