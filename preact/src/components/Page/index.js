import { Component } from 'preact';
import style from './style';
import data from "../../assets/data.json"

export default class Page extends Component {
	
	render({ page }, {  }) {
	
		let article = data[page]

		return (
			<div id={style.page}>
				<p>{article}</p>
			</div>
		);
	}
}
