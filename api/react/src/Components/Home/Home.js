import React from "react"
import "./home.css"
import { Link } from "react-router-dom"

export default class Home extends React.Component {
   render() {
      return (
         <section className="hero is-success is-bold is-medium">
            <div className="hero-body">
               <div className="container has-text-centered">
                  <h1 className="title">
                     React application
                  </h1>
                  <div className="subtitle has-text-centered">
                     <Link className="button is-white" to="/users">List of users</Link>
                     <Link className="button is-white" to="/user/MrAnyx">My info</Link>
                  </div>
               </div>
            </div>
         </section>
      )
   }
}