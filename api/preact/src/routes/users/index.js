import { h, Component } from 'preact';
import {Link} from "preact-router"



export default class ListeUsers extends Component {

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
         this.setState({users: response, loading: false})
      })
   }

	render() {
      let index = 0
		return (
			<section className="section">
         <div className="container">
            <div className="columns is-multiline">

               {this.state.users.map(user => {
                  index++
                  return (
                     <div className="column is-3">
                        <Link  key={index} href={"/user/"+user.login}>
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
		);
	}
}
