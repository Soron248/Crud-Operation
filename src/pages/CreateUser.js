import React, { useContext, useState } from 'react';
import {Button,Form,Col,Row} from 'react-bootstrap';
import { UserContext } from '../components/NewContext';
import {Link} from "react-router-dom";

export default function CreateUser() {
    const [users, setUsers] = useContext(UserContext);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");

    const updateId=(e)=>{
        setId(e.target.value);
    }
    const updateName=(e)=>{
        setName(e.target.value);
    }
    const updatePosition=(e)=>{
        setPosition(e.target.value);
    }
    const updateSalary=(e)=>{
        setSalary(e.target.value);
    }
    const action=(e)=>{
        e.preventDefault();
        if(id == '' || name == '' || position == '' || salary == ''){
            alert("Fill-up input field first");
        }
        else{
            setUsers([...users,{id:id, name:name, position:position, salary:salary}]);
            setId('');
            setName('');
            setPosition('');
            setSalary('');
            alert("User info. created 'Back to home'");

        }
    }
    return (
        <div className="CU">
            <div className="cu1">
            <Form onSubmit={action}>
            <Row className="cur">
                <Col>
                <Form.Control type="number" name="id" value={id} onChange={updateId} placeholder="ID" />
                </Col>
                <Col>
                <Form.Control type="text" name="name" value={name} onChange={updateName} placeholder="Name" />
                </Col>
            </Row>
            <Row className="cur">
                <Col>
                <Form.Control type="text" name="position" value={position} onChange={updatePosition} placeholder="Position" />
                </Col>
                <Col>
                <Form.Control type="number" name="salary" value={salary} onChange={updateSalary} placeholder="Salary" />
                </Col>
            </Row>
            <div className="btnn3">
                <Button variant="primary" type="submit">Create</Button>
            <Link to="/">
                <Button className="btnn2" variant="secondary">Back to Home</Button>
            </Link>
            </div>
            </Form>
            </div>
        </div>
    )
}
