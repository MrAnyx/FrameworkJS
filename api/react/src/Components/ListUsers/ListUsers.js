import React from "react"
import "./listusers.css"
import { Link } from "react-router-dom"
import ReactLoading from 'react-loading';
import LoadingComponent from "../LoadingComponent/LoadingComponent"


export default class ListUsers extends React.Component {

   constructor(){
      super()
      this.state = {
         users: [],
         loading: true
      }

      this.content = <LoadingComponent/>
   }

   componentWillMount(){
      fetch("https://api.github.com/users?per_page=10")
      .then(result => result.json())
      .then(response => {
         this.setState({users: response, loading: false})
      })
   }

   

   render() {

      let index = 0;

      if(!this.state.loading){
         this.content =  ( <section className="section">
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
      </section>)


      }
      
      return (

         <div id="contentUsers">
            {this.content}
            
         </div>
         

       
         
      )
   }
}