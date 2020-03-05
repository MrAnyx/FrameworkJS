import React from "react"
import "./homepage.css"
import TypeIt from "typeit";

export default class NavBar extends React.Component {

   componentDidMount(){
      new TypeIt("#text", {
         strings: "Homepage",
         speed: 100,
         waitUntilVisible: true
       }).go();
   }

   render() {
      return (

         <div id="homepage">
            <p id="text"></p>
         </div>

      );
   }
}