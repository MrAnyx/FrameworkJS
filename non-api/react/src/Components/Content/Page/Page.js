import React from "react"
import "./page.css"
import data from "../../../assets/data.json"

export default class Page extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         content: ""
      }
   }

   componentWillReceiveProps(nextProps) {
      this.setState({
         content: data[nextProps.match.params.page]
      })
   }

   componentDidMount(){
      this.setState({
         content: data[this.props.match.params.page]
      })
   }


   render() {
      return (
         <div id="page">
            <p>{this.state.content}</p>
         </div>
      );
   }
}