import React, {Component} from 'react'

class LoginLogout extends Component{

    constructor(props){
        super(props)
        this.state = {
            isLoggedIn:false
        }
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }

    login(){
        if(this.state.isLoggedIn){
            alert('Your are loggeed in!')
        }
        
            this.setState({
                isLoggedIn:true
            })
    

    }
    logout(){
        if(!this.state.isLoggedIn){
            alert('Your are already loggeed out!')
        }
        
            this.setState({
                isLoggedIn:false
            })
        

    }



    render(){

        let message
        if(this.state.isLoggedIn){
            message = <h2>Welcome Rakshit</h2>
        }
        else{
            message = <h2>Welcome Guest</h2>
        }
        return(
            <>
            {message}
            <button onClick={this.login}>LogIn</button>
            <button onClick={this.logout}>LogOut</button>
            </>
        )
    }
}
export default LoginLogout