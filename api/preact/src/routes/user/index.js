import { h, Component } from 'preact';
import {Link} from "preact-router"



export default class User extends Component {


	constructor(){
      super()
      this.state = {
         user: []
      }
   }

   componentWillMount() {
      fetch(`https://api.github.com/users/${this.props.user}`)
      .then(result => result.json())
      .then(response => {
         this.setState({ user: response})
      })
   }

   render({}, {}) {

      // console.log(user)

      return (

         <div className="columns is-mobile is-centered">
            <div className="column is-half">

               <div className="card user">
                  <div className="card-content">
                     <div className="media">
                        <div className="media-left">
                           <figure className="image is-48x48">
                              <img src={this.state.user.avatar_url} alt="Placeholder image"/>
                           </figure>
                        </div>
                        <div className="media-content">
                           <p className="title is-4">{this.state.user.name || this.state.user.login}</p>
                           <p className="subtitle is-6">@{this.state.user.login}</p>
                        </div>
                     </div>

                     <div className="content">
                        {this.state.user.created_at !== undefined ? <span>{this.state.user.created_at.split("T")[0]}</span> : <span></span>}
                        <br/>
                        <br/>
                        {this.state.user.bio}
                     </div>
                  </div>
               </div>

            </div>
         </div>
         

      )
   }
}