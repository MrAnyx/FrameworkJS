import { Link } from 'preact-router/match';
import style from './style.css';
import {Component} from "preact"

export default class Header extends Component{
	render() {
		return (
			<header id={style.navbar}>
				<span><Link href="/">Preact</Link></span>
				<ul>
					<li><Link href="/page1">Link 1</Link></li>
					<li><Link href="/page2">Link 2</Link></li>
					<li><Link href="/page3">Link 3</Link></li>
					<li><Link href="/page4">Link 4</Link></li>
				</ul>
			</header>
		)
	}
}
