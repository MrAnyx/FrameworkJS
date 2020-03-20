import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"
import image from "../../assets/images/logo.png"

export default class Navbar extends React.Component {
   render() {
      return (

         <nav className="navbar is-dark">
            <div className="navbar-brand">
               <Link className="navbar-item" to="/">
                  <img src={image}/>
               </Link>
            </div>
         </nav>
      )
   }
}