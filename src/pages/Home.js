import React from 'react'
import { useContext } from 'react'
import {Button,Table} from 'react-bootstrap'
import { UserContext } from '../components/NewContext';
import {Link} from "react-router-dom";
import Delete from './Delete';

export default function Home() {
    const [users, setUsers] = useContext(UserContext);
    return (
        <div>
            <div className="titl">
            <h1>CRUD OPERATION</h1>
            </div>
            <Link to="/createUser">
            <div className="btnn">
            <Button variant="dark" >Create User</Button>
            </div>
            </Link>

            <div className="tbl">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(users =>
                            <tr key={users.id}>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.position}</td>
                            <td>{users.salary}</td>
                            <td>
                            <Link to={"/view/"+users.id}>
                            <Button variant="primary">View</Button>
                            </Link>
                            <Link to={"/edit/"+users.id}>
                            <Button className="btnn2" variant="success">Edit</Button>
                            </Link>
                            <Link to={"/"+users.id}>
                            <Delete/>
                            </Link>
                            </td>
                            </tr>
                            )
                    }
                </tbody>
            </Table>
            </div>
        </div>
    )
}
