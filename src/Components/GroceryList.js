import React, { Component } from 'react';

class GroceryList extends Component {

    render() {
            console.log(this.props)
            let groceries = this.props.data.map((grocery) => {
                return (<li> {grocery.item + " " + grocery.value} </li>) 
            })
            
        return (
            <ul>
                {groceries}
                </ul>
        )}
    
}

    
export default GroceryList