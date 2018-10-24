import { Component } from 'preact';
import style from './style';

export default class ToolHome extends Component {
	onComponentDidMount() {}

	render () {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Tool Home component.</p>
			</div>
		);
	}
}
