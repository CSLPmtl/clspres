import { Component } from 'preact';
import { Router } from 'preact-router';
import axios from 'axios';

import { api } from '../config';
import Header from './header';
import Nav from './nav';

axios.defaults.baseURL = api;

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import Error from '../routes/Error';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Nav tool={{ name: 'abra', image: '' }} />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<Error type="404" default />
				</Router>
			</div>
		);
	}
}
