import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Edit=()=>{
    const[mydata,setmydata]=useState({});
    const{id}=useParams();
    const mynavigate=useNavigate();
    
    const getData=()=>{
            let api=`http://localhost:3000/employeedata/${id}`;
            axios.get(api).then((res)=>{
                setmydata(res.data);
            })
    }
    useEffect(()=>{
        getData();
    },[])
    
    const formhandle=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setmydata(values=>({...values,[name]:value}))
    }

    const UpdateData=(e)=>{
        e.preventDefault();
        let url=`http://localhost:3000/employeedata/${id}`;
        axios.put(url,mydata).then((res)=>{
            alert("Data Updated")
            mynavigate("employee")
        })
    }
    
    return(
        <>
         <Container className="mt-5">
        <h2 align="center">Edit Employee Data</h2>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Form >
            <Form.Group controlId="formName">
              <Form.Label>Edit Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={mydata.name}
                onChange={formhandle}
              />
            </Form.Group>
            
            <Form.Group controlId="formEmail">
              <Form.Label>Edit Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={mydata.email}
                onChange={formhandle}
              />
            </Form.Group>
            
            <Form.Group controlId="formTitle">
              <Form.Label>Edit Post</Form.Label>
              <Form.Control
                type="text"
                name="post"
                value={mydata.post}
                onChange={formhandle}
                
              />
            </Form.Group>
            
            <Form.Group controlId="formPost">
              <Form.Label>Edit Department</Form.Label>
              <Form.Control
                type="text"
                name="department"
                value={mydata.department}
                onChange={formhandle}
                
              />
            </Form.Group>
            
            <Form.Group controlId="formPosition">
              <Form.Label> Edit Position</Form.Label>
              <Form.Control
                type="text"
                name="position"
                value={mydata.position}
                onChange={formhandle}
              />
            </Form.Group>

            <Form.Group controlId="formPosition">
              <Form.Label>Edit Status</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={mydata.status}
                onChange={formhandle}
                
              />
            </Form.Group>

            <div className="d-grid gap-2">
            <Button onClick={UpdateData} variant="info" size='lg' type="submit" className="mt-3">
              Update Employee Data
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
        </>
    )
}
export default Edit;