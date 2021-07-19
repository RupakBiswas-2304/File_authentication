import React ,{Component, createContext} from 'react';
import './App.css';
import Navbar from './my_components/Navbar';
import Signup  from './my_components/Signup';
import Login from './my_components/Login';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      theme:"light",
      logedin:false,
      currentview:"signup",
    }
    this.stateofparent.bind(this);
    this.stateofmainview.bind(this); 
  }
  stateofparent = (newtheme) => {
    this.setState({theme: newtheme})
  }
  stateofmainview = (view) =>{
    this.setState({currentview: view})
    console.log(this.state.currentview)
  }

  render() {
    let view ;
    if((this.state.currentview) === "signup"){
      view = <Signup/>
    }
    else if((this.state.currentview) === "login" ){
      view = <Login/>
    }

    return (
      <div className= {`App ${this.state.theme}` }>
      <Navbar stateofparent ={this.stateofparent} stateofmainview={this.stateofmainview}/>
      {/* <Signup/> */}
      {/* <Login/> */}
      {view}
      </div>
    );
  }
}

export default App;
