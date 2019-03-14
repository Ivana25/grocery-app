import React, { Component } from 'react';
import Header from "./Components/Header"
import logo from './logo.svg';
import AddGrocery from './Components/AddGrocery'
import $ from 'jquery'
import GroceryList from './Components/GroceryList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      groceryList:[]
    };
    }
    getGroceryList(){
      $.ajax ({
        url: 'https://rocky-depths-87568.herokuapp.com/',
        dataType: 'json',
        cache: false,
        success: function(data){
          this.setState({groceryList: data});
          console.log(data)
        }.bind(this),
        error: function(xhr, status, err){
          console.log(xhr);
          console.log(status);
          console.log(err);
          alert(err);
        }
      })
    }

    componentDidMount(){
      this.getGroceryList()
    }
  
  render() {
    return (
      <div>
        <Header/>
        <AddGrocery/>
        <GroceryList data={this.state.groceryList}/>
        </div>
    );
  }
}

export default App;
