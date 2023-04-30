import React, {Component} from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      properties: localStorage.getItem('properties') ? JSON.parse(localStorage.getItem('properties')) : []
    }
  }





  addListing = (name, id) => {
    this.setState({
      properties: [...this.state.properties, {name, id}]

    })
    
  }


  render() {
    console.log(this.state.properties)
    localStorage.setItem('properties', JSON.stringify(this.state.properties))

    
    return (
      <div> 
          <Header />  
          <Form 
            addListing={this.addListing}


          
          />
          <List 
            properties={this.state.properties}
          
          />
      </div>
      


    )
  }
}


export default App