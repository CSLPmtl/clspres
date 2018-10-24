/**
 * This component renders the Tool Navigation,
 * present on each parent and teacher page
 */
import { Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Nav extends Component {

	state = {
		image: { src: this.props.image, alt: '' }
	}

	render () {
		return (
			<nav>
				{this.state.image.src !== null && <img src={this.state.image.src} alt="" />}
				<p>{this.props.tool}</p>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/profile">Me</Link>
				<Link activeClassName={style.active} href="/profile/john">John</Link>
			</nav>
		);
	}
}
