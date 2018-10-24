import style from './style';

/** fall-back route (handles unroutable URLs) */
export default function Error ({ type, url }) {
	return (
		<section style={style.error}>
			<h2>Error {type}</h2>
			<p>It looks like we hit a snag.</p>
			<pre>{url}</pre>
		</section>
	);
}
