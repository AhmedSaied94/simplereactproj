import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Navi from "./Navi";
import Login from "./Login";
import Gallery from "./Gallery";
import Todo from "../Todo/Todo"
import PhoneBook from "../PhoneBook/PhoneBook"
import Reg from "./Reg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class Day3 extends(React.Component){

  constructor(){
    super();
    this.state = {curScr:"login"}
  }

  chgScr=(cur)=>{
    this.setState({curScr:cur})
    
  }


  render(){

    return <Router>
    <Container fluid>
      <Navi />
      <Container>
        {/* {this.state.curScr === "login" && <Login chgScr={this.chgScr}/>}
        {this.state.curScr === "gallery" && <Gallery />}
        {this.state.curScr === "todo" && <Todo />}
        {this.state.curScr === "phoneBook" && <PhoneBook />}
        {this.state.curScr === "register" && <Reg chgScr={this.chgScr}/>} */}
        {/* {this.state.curScr === "gallery" && this.props.path=="/gallery"} */}
        {/* {this.props.url=this.state.curScr==="gallery"?"/gallery":this.props.url} */}
        
        <Switch>
          

          <Route path="/register">
            <Reg  chgScr={this.chgScr}/>
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/phoneBook">
            <PhoneBook />
          </Route>
          <Route path="/" ref="rou">
            
            <Login chgScr={this.chgScr}/>

          </Route>
        </Switch>
      </Container>
    </Container>
    </Router>
  }
}
