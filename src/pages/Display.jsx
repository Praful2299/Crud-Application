  import axios from "axios";
  import { useState , useEffect } from "react";
  import { Button } from "react-bootstrap";
  import React from 'react';
  import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
  import { useNavigate } from "react-router-dom";

  const Display=()=>{
      const[mydata,setmydata]=useState([]);
      const navigate =useNavigate();

      const getData=()=>{
          axios.get("http://localhost:3000/employeedata").then((res)=>{
              setmydata(res.data);
          })
      }
      
      useEffect(()=>{
          getData();
      },[])

      const DataDelete=(myid)=>{
          let api=`http://localhost:3000/employeedata/${myid}`
          axios.delete(api).then((res)=>{
              alert("Data Deleted")
              getData();
          })
      }

      const DataEdit=(id)=>{
        navigate("/edit/"+id)
      }

      const ans=mydata.map((key)=>{
        return(
          <MDBTableBody>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{key.name}</p>
                  <p className='text-muted mb-0'>{key.email}</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>{key.post}</p>
              <p className='text-muted mb-0'>{key.department}</p>
            </td>
            <td>
              <MDBBadge color='success' pill>
                {key.status}
              </MDBBadge>
            </td>
            <td>{key.position}</td>
            <td>
              <Button variant="primary" style={{marginRight:"10px"}} onClick={()=>{DataEdit(key.id)}}>Edit</Button>
              <Button variant="danger"  onClick={()=>{DataDelete(key.id)}}>Delete</Button>
            </td>
          </tr>
          </MDBTableBody>
          )
      })


      return  (
          <>
  <MDBTable align='middle'>
  <MDBTableHead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Title</th>
            <th scope='col'>Status</th>
            <th scope='col'>Position</th>
            <th scope='col'>Action</th>
          </tr>
        </MDBTableHead>
        {ans}
        </MDBTable> 
              
          
              
          </>
      )
  }
  export default Display;