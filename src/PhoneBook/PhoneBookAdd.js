import React from "react";
import PhoneBookNew from "./PhoneBookNew";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
export default class PhoneBookAdd extends(React.Component){
    constructor(){
        super();
        this.state = {text:"",newDisplay:"none"}
    }
    displayNew=()=>{
        this.setState({newDisplay:"block"})
    }
    closeNew=()=>{
        this.setState({newDisplay:"none"})
    }
    setSearch=(e)=>{
        this.setState({text:e.target.value})
        this.props.searchCon(this.state.text)
    }
    render(){
        return <Row >
            <Col xs={12} className="navbar navbar-expand">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item"> <input type="text" placeholder="Search Contact" onChange={this.setSearch} value={this.state.text} className="form-control" /></li>
            <li><button onClick={this.displayNew} className="btn btn-primary ms-2">Add New</button> </li>
            </ul>
            </Col>
            <Col xs={12}>
            <PhoneBookNew display={this.state.newDisplay} close={this.closeNew} addCon={this.props.addCon}/>
            </Col>
        </Row>
    }
}