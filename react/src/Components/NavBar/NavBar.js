import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"


export default class NavBar extends React.Component {
   render() {
      return (

         <header id="navbar">
            <span><Link to="/">React</Link></span>
            <ul>
               <li><Link to="/page1">Link 1</Link></li>
               <li><Link to="/page2">Link 2</Link></li>
               <li><Link to="/page3">Link 3</Link></li>
               <li><Link to="/page4">Link 4</Link></li>
            </ul>
         </header>
            

      );
   }
}