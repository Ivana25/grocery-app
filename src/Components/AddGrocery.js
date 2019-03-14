import React, { Component } from 'react';


class AddGrocery extends Component {
    render() {
        return (
            <form action="https://rocky-depths-87568.herokuapp.com/groceries" method="POST">
            <input name="item" type="text" placeholder="Item"/>
            {/* <br/> */}
            <input name="value" type="text" placeholder= "Value"/>
            {/* <br/> */}
            <input type="submit" placeholder= "Submit"/>

            
        
            </form>
        )
    }
    
}
export default AddGrocery