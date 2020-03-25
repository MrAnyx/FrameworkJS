import React from "react"
import "./loadingcomponent.css"

export default class LoadingComponent extends React.Component {
   render() {
      return (
         <div id="wrapper">
            
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
               <circle cx="50" cy="50" r="45"/>
            </svg>
            
         </div>
      )
   }
}