import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Navbar from "./components/Navbar/Navbar.jsx"
import Home from "./components/Navbar/Home.jsx"
import Review from "./components/Navbar/Review.jsx"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view:"home",
      items: []
    }
    this.changeView=this.changeView.bind(this)
  }
changeView(view){
  this.setState({
    view:view
  })
}
  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  // renderView(){
  // if(this.state.view==="home"){
  //   return(
  //     <Home/>
  //   )
  // }
  // }

  render () {
    return (
    <div>
      <div>  
      <Navbar change={this.changeView}/>
        </div>
      {this.state.view==="home" && <Home/>}
      {this.state.view==="review" && <Review/>}
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));