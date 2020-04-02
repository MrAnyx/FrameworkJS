import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import image from "../../assets/logo.png"

const Header = () => (
		<nav class="navbar is-dark">
			<div class="navbar-brand">
				<Link class="navbar-item" href="/">
					<img src={image}/>
				</Link>
			</div>
		</nav>
	
);

export default Header;
