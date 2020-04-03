import { h, Component } from 'preact';
import style from './style';
import {Link} from "preact-router"



export default class Home extends Component {

	render({}, {}) {
		return (
			<section className="hero is-success is-bold is-medium">
				<div className="hero-body">
					<div className="container has-text-centered">
						<h1 className="title">
							Preact application
						</h1>
						<div className="subtitle has-text-centered">
							<Link className="button is-white" style={{"margin": "20px 10px"}} href="/users">List of Users</Link>
							<Link className="button is-white" style={{"margin": "20px 10px"}} href="/user/MrAnyx">My Info</Link>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
