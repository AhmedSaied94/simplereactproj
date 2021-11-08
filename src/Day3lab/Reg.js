import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Reg extends(React.Component){
    constructor(){
        super();
        this.state = {
            
            
            email:"",
            password:"",
            address:"",
            address2:"",
            city:"",
            state:"",
            zip:"", 
            url:"",
            upJson:"",
            msg:"We'll never share your email with anyone else."
        }
        
    }

    setValues=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }



    log=(e)=>{
        
        e.preventDefault()
            
            let obj = {
                "email":this.state.email,
                "password":this.state.password
            }
            console.log(obj)
            this.setState({upJson:JSON.stringify(obj)})
            this.setState({url:"https://reqres.in/api/login"})

            fetch(this.state.url,{
                method:"POST",
                headers:{'content-type':"application/json"},
                body:this.state.upJson
            }).then((res)=>{
                return res.json();
            }).then((json)=>{
                console.log(json)
                
                if(json.token){          
                    this.props.chgScr("gallery")
                    window.location.href = "gallery"
                    
                }else{
                    this.setState({msg:json.error})

                }
                
            }) 

    }
    render(){
        return <div style={{maxWidth:"800px"}} className="border border-primary rounded mt-5 mx-auto p-3">
            <form className="row g-3" method="POST">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" name="email" onChange={this.setValues} value={this.state.email}/>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" name="password" onChange={this.setValues} value={this.state.password}/>
                </div>
                <div id="emailHelp" className="form-text col-12" style={{color:this.state.msg==="We'll never share your email with anyone else."?"#6c757d":"red"}}>{this.state.msg}</div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" onChange={this.setValues} value={this.state.address}/>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="address2" onChange={this.setValues} value={this.state.address2}/>
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" name="city" onChange={this.setValues} value={this.state.city}/>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select" name="state" onChange={this.setValues} value={this.state.state}>
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" name="zip" onChange={this.setValues} value={this.state.zip}/>
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" onClick={this.log}>Sign Up</button>
                </div>
            </form>
        </div>
    }
}
