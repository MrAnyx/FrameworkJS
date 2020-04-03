import { h, Component } from 'preact';
import {Link} from "preact-router"

export default class Footer extends Component {

	render({}, {}) {
		return (
         <footer class="footer">
            <div class="content has-text-centered">
               <p>
                  Made with 💕 by MrAnyx
               </p>
            </div>
         </footer>
		);
	}
}
