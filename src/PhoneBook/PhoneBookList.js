import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";
import {Button} from "react-bootstrap";

export default class PhoneBookList extends(React.Component){
    deleteCon=(contId)=>{
        this.props.deleteCon(contId)
    }
    render(){
        return <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.contacts.map((cont)=>{

                return <tr>
                        <td>{cont.id}</td>
                        <td>{cont.fName+" "+cont.lName}</td>
                        <td>{cont.num}</td>
                        <td>{cont.email}</td>
                        <td className="text-center"><Button onClick={()=>this.deleteCon(cont.id)} className="mx-auto">Delete</Button></td>
                        </tr>
                    })}
                </tbody>
                </Table>
        </div>
    }
}