import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Navbar from "./components/Navbar/Navbar.jsx"
import Home from "./components/Navbar/Home.jsx"
import Review from "./components/Navbar/Review.jsx"
import Foodlist from "./components/Navbar/Foodlist.jsx"
import Admin from "./components/Navbar/Admin.jsx"
import Adminwork from "./components/Navbar/Adminwork.jsx"
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
      {this.state.view==="speciality" && <Foodlist/>}
      {this.state.view==="Admin" && <Admin change={this.changeView}/>}
      {this.state.view==="adminwork" && <Adminwork change={this.changeView}/>}
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));