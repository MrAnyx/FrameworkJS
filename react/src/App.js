import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SideBar from "./SideBar/SideBar"
import Content from "./Content/Content"

export default class App extends React.Component {
	

	render() {
		return (
			<div id="app">

				<Router>
					<SideBar/>
					<Switch>
						<Route path="/:crypto" component={Content}/>
					</Switch>
				</Router>
			</div>
			
		);
	}

}