/**
 * This component renders the Global navigation
 * This is _not_ the navigation between a tool's sub-pages
 */

import { Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	constructor () {
		super();
		this.navElements = [{
			label: 'ABRA',
			route: '/abra'
		}]; // axios.get('theme-settings');
	}

	render () {
		return (
			<header class={style.header}>
				<h1>CSLP Resources</h1>
				<nav>
					{ this.navElements.forEach(item => <Link href={item.route}>{item.label}</Link>) }
				</nav>
			</header>
		);
	}
}
