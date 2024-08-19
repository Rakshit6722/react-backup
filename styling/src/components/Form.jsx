import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            topic: 'react'
        }
        //   this.handleUsername = this.handleUsername.bind(this)
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        // console.log(this.state.username)
    }

    handleComments = event => {
        this.setState({
            comment: event.target.value
        })
        // console.log(this.state.comment)
    }

    handleTopic = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
     
            alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label>Username</label>
                        <input type='text' value={this.state.username} onChange={this.handleUsername} />
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comment} onChange={this.handleComments} />
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.handleTopic}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
