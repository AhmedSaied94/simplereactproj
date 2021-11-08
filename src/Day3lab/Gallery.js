import React from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Gallery extends(React.Component){
    constructor(){
        super()
        this.state = {
            users:[],
            here:"gallery"
        }
    }

    componentDidMount(){
        fetch("https://reqres.in/api/users?page=2").then((res)=>res.json()).then((data)=>{
           this.setState({users:data.data})
           console.log(this.state.users)

        })
    }

    render(){
        return <Container>
            <Row className="ms-auto">
        {this.state.users.map((user)=>{
        
          return <Col className="mt-4">
          <Card style={{ width: '18rem' }} className="mx-auto">
          <Card.Img variant="top" src={user.avatar} />
          <Card.Body>
            <Card.Title>{user.first_name+" "+user.last_name}</Card.Title>
            <Card.Text>
              {user.email}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>  
        </Col>})}
        </Row>
        </Container>
    }
}