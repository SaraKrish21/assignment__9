import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar/Navbar';
import Table from 'react-bootstrap/Table';
import './Contact.css';

export default function Contact() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/user/getAll')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Table striped bordered hover className="contact-table">
        <thead>
          <tr>
            <th>Names of people in our database.</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}