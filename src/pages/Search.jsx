import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const Search=()=>{
    const[name,setname]=useState("");
    const[data,setdata]=useState([]);


    const getData=()=>{
        let url=`http://localhost:3000/employeedata?name=${name}`;
            axios.get(url).then((res)=>{
                setdata(res.data)
            })
    }
    
    const answer=data.map((key)=>{
        return(
            <>
                <Card style={{ width: '15rem'  }}>
      <Card.Img variant="top" src="./src/images/logo.png" />
      <Card.Body>
        <Card.Title style={{color:"red", backgroundColor:"black" , textAlign:"center"}}>{key.name}</Card.Title>
        <Card.Text style={{backgroundColor:"black" , color:"white" , textAlign:"center"}}>
          Email: {key.email} <br />
          Post: {key.post} <br />
          Department: {key.department} <br />
          Position: {key.position}
        </Card.Text>
        <Card.Title style={{color:"red", backgroundColor:"black" , textAlign:"center"}}>Status:{key.status}</Card.Title>
      </Card.Body>
    </Card>
            </>
        )
    })
    
    return(
        <>

        <div style={{textAlign:"center", backgroundColor:"#8368688e"}}>
        <h1 >Search Employee Details</h1>
        </div>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Enter Employee Name"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>{setname(e.target.value)}}
            />
            <Button onClick={getData} variant="outline-success">Search</Button>
          </Form>
          <hr />
          <div style={{display:"flex", justifyContent:"center"}}>
          {answer}
          </div>
        </>
    )
}
export default Search;