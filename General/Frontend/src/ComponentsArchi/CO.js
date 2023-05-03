import React, { useState } from "react";
import "../pages/Simulation.css";

class CO extends React.Component {
  constructor(){
    super();
    this.state={
      isClicked: false,
      Co:'0000'
    };
  }
 setState({isClicked:isClicked,Co:Co}){
  this.isClicked=isClicked
  this.Co=Co
 }
 handleClick = () => {
    this.setState({isClicked:true})
  };
render(){
   return (
    <div className="CO">
      <div>CO</div>
      <div className={`Co ${this.isClicked ? "boxShadowBlue" : ""}`}
      onClick={this.handleClick}>
        <div className="C1">{this.Co[0]}</div>
        <div className="C2">{this.Co[1]}</div>
        <div className="C3">{this.Co[2]}</div>
        <div className="C4">{this.Co[3]}</div>
      </div>
    </div>
  );
}
 
}

export default CO;
