import React, {Component} from 'react';



class List extends Component {

    
  
    

    render () {
        return (
            <div>
                <ul>
                   {this.props.properties.map((property) => (
                          <li key={property.id}>{property.name}</li>    
                   ))}
                </ul>
            </div>
        )
    }
}

export default List;