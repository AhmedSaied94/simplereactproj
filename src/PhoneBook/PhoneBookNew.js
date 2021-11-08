import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CloseButton } from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";

export default class PhoneBookNew extends(React.Component){
    constructor(){
        
        super();
        this.idInc = 1
        this.state = {
            fName:"",
            lName:"",
            email:"",
            num:""
        }
    }

    setFname=(e)=>{
        this.setState({fName:e.target.value})
    }
    setLname=(e)=>{
        this.setState({lName:e.target.value})
    }
    setEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    setNum=(e)=>{
        this.setState({num:e.target.value})
    }
    savCon=()=>{
        this.cont = {
            fName:this.state.fName,
            lName:this.state.lName,
            email:this.state.email,
            num:this.state.num,
            id:this.idInc++
        }
        this.props.addCon(this.cont)
        this.props.close()
        this.setState({fName:"",lName:"",email:"",num:""})
    }
    
    render(){

        return <Modal.Dialog style={{display:this.props.display,minWidth:"110%"}} className="mx-auto">
        <Modal.Header >
          <Modal.Title>Modal title</Modal.Title>
          <CloseButton onClick={this.props.close}/>
        </Modal.Header>
      
        <Modal.Body>
            <form >
                <div className="row mb-3">
                    <label  className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control"  onChange={this.setFname} value={this.state.fName}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.setLname} value={this.state.lName}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label  className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" onChange={this.setNum} value={this.state.num}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label  className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" onChange={this.setEmail} value={this.state.email}/>
                    </div>
                </div>

            </form>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.close}>Close</Button>
          <Button variant="primary" onClick={this.savCon}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
        
    }
}