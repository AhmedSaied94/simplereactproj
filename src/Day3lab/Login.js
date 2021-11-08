import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends(React.Component){
    constructor(){
        super();
        this.state = {
            
            
            email:"",
            password:"", 
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
                    
                }else{
                    this.setState({msg:json.error})

                }
                
            }) 

    }

    render(){
        return <div style={{maxWidth:"700px"}} className="border border-primary rounded mt-5 mx-auto p-3">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={this.setValues} value={this.state.email}/>
                    <div id="emailHelp" className="form-text" style={{color:this.state.msg==="We'll never share your email with anyone else."?"#6c757d":"red"}}>{this.state.msg}</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={this.setValues} value={this.state.password}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button className="btn btn-primary" onClick={this.log}>Sign In</button>
            </form>
        </div>
    }
}
