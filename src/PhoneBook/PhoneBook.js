import React from "react";
import PhoneBookAdd from "./PhoneBookAdd";
import PhoneBookHeader from "./PhoneBookHeader";
import PhoneBookList from "./PhoneBookList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
export default class PhoneBook extends(React.Component){
    constructor(){
        super();
        this.state = {
            contacts:[],
            fContacts:[]
        }
    }

    componentDidMount(){
        if(localStorage.phoneBook){
            let conts = JSON.parse(localStorage.phoneBook)
            this.setState({contacts:conts, fContacts:conts})
            
        }
    }
    componentWillUnmount(){
        localStorage.phoneBook = JSON.stringify(this.state.contacts)
    }

    addCon=(cont)=>{
        this.state.contacts.push(cont)
        this.setState({fContacts:this.state.contacts})

    }
    deleteCon=(contId)=>{
        let dCont = this.state.contacts.findIndex((con)=> contId === con.id)
        this.state.contacts.splice(dCont, 1)
        this.setState({fContacts:this.state.contacts})
    }
    searchCon=(le)=>{
        if(le===""){
            
            this.setState({fContacts:this.state.contacts})
        }else if(Number(le)){
            this.setState({fContacts:this.state.contacts.filter((con)=> le === con.num.slice(0, le.length))})
        }else{
            this.setState({fContacts:this.state.contacts.filter((con)=> le.toLowerCase() === con.fName.toLowerCase().slice(0,le.length))})
        }
        console.log(typeof(le))
    }
    render(){
        return <Container>
            <div style={{maxWidth:"680px",marginTop:"100px"}} className="mx-auto px-3 py-3 border border-dark rounded">
            <PhoneBookHeader />
            <PhoneBookAdd addCon={this.addCon} searchCon={this.searchCon}/>
            <PhoneBookList contacts={this.state.fContacts} deleteCon={this.deleteCon}/>
            {/* <PhoneBookNew /> */}
            </div>
        </Container>
    }
}