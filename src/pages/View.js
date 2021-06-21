import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { UserContext } from '../components/NewContext';


export default function View() {
    const [users, setUsers] = useContext(UserContext);
    const {Uid} = useParams();
    const user = users.filter((users) => users.id == Uid);

    return (
        <div className="view">
            <div className="view1">
            <h1>NAME : {user[0].name}</h1>
            <h1>POSITION : {user[0].position}</h1>
            <h1>SALARY : {user[0].salary} BDT.</h1>
            <Link to="/">
            <Button variant="secondary">
              Back to Home
            </Button>
            </Link>
            </div>
        </div>
    )
}
