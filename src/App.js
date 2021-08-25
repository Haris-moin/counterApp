import React, { Component } from 'react'
import './App.css'

export class App extends Component {
  countInt=0
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  
  }
  
  onResetCounter(){
    clearInterval(this.interval);
    this.setState({count:0})
  }
  onStartcounter(){
        
         this.interval= setInterval(()=>{
          this.setState({
            count:this.state.count+1
          })
         },1000)    
            // },1000)
  }
  onStopCounter(){
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="main-container">
        <div className="count">
        {this.state.count}
        </div>
        <div >
          <button onClick={()=>this.onStartcounter()}>start</button>
          <button onClick={()=>this.onStopCounter()}>stop</button>
          <button onClick={()=>this.onResetCounter()}>reset</button>
        </div>
      </div>
    )
  }
}

export default App
