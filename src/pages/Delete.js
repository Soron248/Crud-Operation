import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import {Button,Modal} from 'react-bootstrap';
import {Link, useParams} from "react-router-dom";
import { UserContext } from '../components/NewContext';

export default function Delete() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [users, setUsers] = useContext(UserContext);
    const {Uid} = useParams();

    const deleteInfo=(Uid)=>{
        const user = users.filter((users) => users.id != Uid);
        setUsers(user);
    }

    return (
      
      <>
        <Button variant="danger" onClick={handleShow}>
          Delete
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Remove  Users Info.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure to delete this information?
          </Modal.Body>
          <Modal.Footer>
            <Link to="/">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={()=> deleteInfo(Uid)} className="btnn2">Delete</Button></Link>
          </Modal.Footer>
        </Modal>
      </>
    );
  }