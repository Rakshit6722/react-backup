import React, { Component } from 'react'

class ErrorBoundars extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Error:false
      }
    }
    static getDerivedStateFromError(error){
        return{
            Error:true
        }
    }
  render() {
    if(this.state.Error){
        return(
            <>
            <h1>something went wrong</h1>
            </>
        )
    }
    else{
        return this.props.childern
    }
  }
}

export default ErrorBoundars
