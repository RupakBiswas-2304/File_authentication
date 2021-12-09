import React ,{Component, createContext} from 'react';
import './App.css';
import Navbar from './my_components/Navbar';
import Signup  from './my_components/Signup';
import Login from './my_components/Login';
import Profile from './my_components/Profile';
import Fileupload from './my_components/Fileupload';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      theme:"light",
      logedin:false,
      currentview:"home",
      id:0,
      name:"",
      email:"",
      phoneno:"",
      age:0
    }
    this.stateofparent.bind(this);
    this.stateofmainview.bind(this); 
  }
  stateofparent = (newtheme) => {
    this.setState({theme: newtheme})
  }
  stateofmainview = (view) => {
    this.setState({currentview: view})
  }

  stateofloggedin = (value) => {
    this.setState({logedin: value})
  }
  

  render() {
    let view ;
    if(!(this.state.logedin) ){
      if((this.state.currentview) === "signup"){
        view = <Signup/>
      }
      else if((this.state.currentview) === "login" ){
        view = <Login logintrigger = {this.stateofloggedin}/>
      }
    }
    else{
      if((this.state.currentview) === "home"){
        view = <><Profile/>
              <Fileupload/></>
      }
    }
    

    return (
      <div className= {`App ${this.state.theme}` }>
      <Navbar stateofparent ={this.stateofparent} 
              stateofmainview={this.stateofmainview}
              loginstatus = {this.state.logedin}/>

      {view}
      {/* <Profile/> */}
      </div>
    );
  }
}

export default App;
