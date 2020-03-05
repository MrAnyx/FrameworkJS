import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from './NavBar/NavBar';
import Homepage from "./Content/Homepage/Homepage"
import Page from "./Content/Page/Page"


export default class App extends React.Component {
	

	render() {
		return (
			<div id="app">

				<Router>
					<NavBar/>
					<Switch>
						<Route exact path="/" component={Homepage}/>
						<Route path="/:page" component={Page}/>
					</Switch>
				</Router>
			</div>
			
		);
	}

}