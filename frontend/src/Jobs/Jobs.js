import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'

import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function Jobs() {
    const [jobID, setJobID] = useState('');
    const [jobName, setJobName] = useState('');
    // eslint-disable-next-line 
    const [errorMsg, setErrorMsg] = useState('');
    // eslint-disable-next-line 
    const handleSubmit = async (event) => {
        event.preventDefault();

        //eslint-disable-next-line
        const response = await axios.post('http://localhost:3000/jobs/createJob', {
            job_id: jobID,
            job_name: jobName
        }).then(function(response) {
            alert('Job added successfully');
          })
        .catch(function(error) {
            if (error.response.status === 400) {
              alert('Job already exists');
            } else {
              alert('An error occurred while adding the job');
            }
          });;

        
    }

    return (
        <div className="jobs-container">
            <Navbar />
            <Form onSubmit={handleSubmit} className="jobs-form">
                <Form.Group controlId="formJobId">
                    <Form.Label>Job ID</Form.Label>
                    <Form.Control type="number" placeholder="Enter job ID" value={jobID} onChange={(e) => setJobID(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="formJobName">
                    <Form.Label>Job Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter job name" value={jobName} onChange={(e) => setJobName(e.target.value)} required />
                </Form.Group>

                {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
