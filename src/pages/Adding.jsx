import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adding = () => {
const navigate=useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    post: '',
    position: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setFormData({ name: '', email: '', title: '', post: '', position: '' });
  };

  const DataSave=(e)=>{
    e.preventDefault();    
    let url="http://localhost:3000/employeedata";
        axios.post(url,formData).then((res)=>{
            alert("Data Saved Successfully")
            navigate("/employee")
        })
  }

  return (
    
    <Container className="mt-5">
        <h2 align="center">Enter Employee Data</h2>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder='Enter Full Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder='Enter Email Account'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Form.Group controlId="formTitle">
              <Form.Label>Post</Form.Label>
              <Form.Control
                type="text"
                name="post"
                placeholder='Enter Post'
                value={formData.post}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Form.Group controlId="formPost">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                name="department"
                placeholder='Enter Dept'
                value={formData.department}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Form.Group controlId="formPosition">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                name="position"
                placeholder='Enter Position(senior or junior)'
                value={formData.position}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPosition">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                name="status"
                placeholder='Enter Status Of Employee'
                value={formData.status}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-grid gap-2">
            <Button onClick={DataSave} variant="info" size='lg' type="submit" className="mt-3">
              Add Employee
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Adding;
