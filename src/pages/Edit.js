import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../components/NewContext';
import {Button,Form,Col,Row} from 'react-bootstrap';
import {Link} from "react-router-dom";

export default function Edit() {
    const [users, setUsers] = useContext(UserContext);
    const {Uid} = useParams();
    const user = users.filter((users)=> users.id == Uid);

    const [name, setName] = useState(user[0].name);
    const [position, setPosition] = useState(user[0].position);
    const [salary, setSalary] = useState(user[0].salary);

    const edtName=(e)=>{
        const newName = e.target.value;
        user[0].name = newName;
        setName(newName);
    }
    const edtPosition=(e)=>{
        const newPsotion = e.target.value;
        user[0].position = newPsotion;
        setPosition(newPsotion);

    }
    const edtSalary=(e)=>{
        const newSalary = e.target.value;
        user[0].salary = newSalary;
        setSalary(newSalary);

    }

    const editUser=(e)=>{
        e.preventDefault();
        setUsers([...users]);
    }

    return (
        <div className="CU">
            <div className="cu1">
            <Form onSubmit={editUser}>
                <Form.Label>
                    <h1>ID No : {user[0].id}</h1>
                </Form.Label>
            <Row className="cur">
                <Col>
                <Form.Control type="text" name="name" onChange={edtName} value={name} placeholder={user[0].name} />
                </Col>
            </Row>
            <Row className="cur">
                <Col>
                <Form.Control type="text" name="position" onChange={edtPosition} placeholder={user[0].position} />
                </Col>
            </Row>
            <Row className="cur">
                <Col>
                <Form.Control type="number" name="salary" onChange={edtSalary} placeholder={user[0].salary} />
                </Col>
            </Row>
            <div className="btnn3">
            <Link to="/">
                <Button variant="primary" type="submit">Edit</Button>
                <Button className="btnn2" variant="secondary">Back to Home</Button>
            </Link>
            </div>
            </Form>
            </div>
        </div>
    )
}
