import React ,{Component} from 'react';
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
      theme:"dark",
      logedin:false,
      currentview:"signup",
      token:"",
      id:"",
      name:"",
      email:"",
      phoneno:"",
      age:""
    }
    this.stateofparent.bind(this);
    this.stateofmainview.bind(this); 
    this.stateofloggedin.bind(this); 
    this.Changetoken.bind(this); 
    this.changename.bind(this); 
    this.changeid.bind(this); 
    this.changeemail.bind(this); 
    this.changeage.bind(this); 
    this.changephoneno.bind(this); 
  }
  stateofparent = (newtheme) => {
    this.setState({theme: newtheme})
  }
  stateofmainview = (view) => {
    this.setState({currentview: view})
  }
  stateofloggedin = (view) => {
    this.setState({logedin:view})
  }
  Changetoken = (data) => {
    this.setState({token: data})
  }
  changename = (data) => {
    this.setState({name: data})
  }
  changeid = (data) => {
    this.setState({id: data})
  }
  changeemail = (data) => {
    this.setState({email: data})
  }
  changeage = (data) => {
    this.setState({age: data})
  }
  changephoneno = (data) => {
    this.setState({phoneno: data})
  }

  render() {
    let view ;
    if(!(this.state.logedin) ){
      if((this.state.currentview) === "signup"){
        view = <Signup />
      }
      else if((this.state.currentview) === "login" ){
        view = <Login stateofloggedin ={this.stateofloggedin}
                      stateofmainview={this.stateofmainview}
                      Changetoken  ={this.Changetoken }/>
      }
    }
    else{
      if((this.state.currentview) === "home"){
        view = <><Profile token ={this.state.token} 
                          name = {this.state.name}
                          id = {this.state.id}
                          phoneno = {this.state.phoneno}
                          age = {this.state.age}
                          email = {this.state.email}
                          changename ={this.changename}
                          changeid ={this.changeid}
                          changephoneno ={this.changephoneno}
                          changeage ={this.changeage}
                          changeemail={this.changeemail}
                          stateofloggedin ={this.stateofloggedin}
                          />
              <Fileupload  id = {this.state.id}/></>
      }
    }
    

    return (
      <div className= {`App ${this.state.theme}` }>
      <Navbar stateofparent ={this.stateofparent} 
              stateofmainview={this.stateofmainview}
              loginstatus = {this.state.logedin}
              stateofloggedin ={this.stateofloggedin}/>

      {view}
      {/* <Profile/> */}
      </div>
    );
  }
}

export default App;
