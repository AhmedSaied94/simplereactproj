import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default class PhoneBookHeader extends(React.Component){

    render(){
        return <Row>
            <Col><h1 className="text-center">Phone Book</h1></Col>
        </Row>
    }
}