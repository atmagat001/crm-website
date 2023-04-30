import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';


class Form extends Component {

    constructor(props) {
        super()
        this.state = {
            name: '',
            id: ''
        }
    }


    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            name: event.target.value,
            id: uuidv4()
        })
        


    }

    handleSubmit = (event) => {
        event.preventDefault();
       
        this.props.addListing(this.state.name, this.state.id)

        this.setState({
            name: '',
            id: ''
        })
        
    }

    render () {
        return (
            <div>
                <form 
                onSubmit={this.handleSubmit}
                
                action="">
                    <label htmlFor="name">Name</label>
                    <input type="search" name="name" id="name" onChange={this.handleChange} value={this.state.name} placeholder="Enter Property Name" />
                    <button type='submit'>Submit</button>
                    <button type='reset' >Reset</button>

                </form>
            </div>
        )
    }
}

export default Form;