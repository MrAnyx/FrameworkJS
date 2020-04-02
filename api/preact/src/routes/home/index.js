import { h, Component } from 'preact';
import style from './style';



export default class Home extends Component {

	render({}, {}) {
		return (
			<section class="hero is-success is-bold is-medium">
				<div class="hero-body">
					<div class="container has-text-centered">
						<h1 class="title">
							Preact application
						</h1>
						<div class="subtitle has-text-centered">
							<Link class="button is-white" href="/users">List of Users</Link>
							<Link class="button is-white" href="/user/MrAnyx">My Info</Link>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
