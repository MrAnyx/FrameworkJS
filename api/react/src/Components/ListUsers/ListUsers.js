import React from "react"
import "./listusers.css"
import { Link } from "react-router-dom"


export default class ListUsers extends React.Component {

   constructor(){
      super()
      this.state = {
         users: []
      }
   }

   componentWillMount(){
      fetch("https://api.github.com/users?per_page=10")
      .then(result => result.json())
      .then(response => {
         this.setState({users: response})
      })
   }

   

   render() {

      let index = 0;
      return (

         <section className="section">
            <div className="container">
               <div className="columns is-multiline">

                  {this.state.users.map(user => {
                     index++
                     return (
                        <div className="column is-3">
                           <Link  key={index} to={"/user/"+user.login}>
                              <div className="card">
                                 <div className="card-content">
                                    {user.login}
                                 </div>      
                              </div> 
                           </Link>
                        </div>
                     )
                  })}  
              
                  
               </div>
            </div>
         </section>


         
      )
   }
}