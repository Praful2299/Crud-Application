import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


const Home = () => {
  return (
 
   <div className='mainhome'>
      
      <div className="hero-section" >
        <Container>
          <Row className="align-items-center">
            <Col md={20}>
              <h1  >Welcome to Employee Management App</h1>
              <p>Manage your employees efficiently with our comprehensive tools and user-friendly interface.</p>
              <Button style={{textAlign:"center"}} variant="primary" href="employee">Employee Data</Button>
            </Col>
          </Row>
        </Container>
        

        </div>
      <Container className="mt-5">
        <Row>
          <div className='cards' >
        <Card  style={{width:'18rem',backgroundColor:"rgba(255, 255, 255, 0.359",alignItems:'center' , textAlign:'center'}}>
        <img src="./src/images/easy.png" height="150px" width="150px" alt="" />
      <Card.Body>
        <Card.Title>Easy Management</Card.Title>
        <Card.Text>
        Organize and manage your employees' data effortlessly.
        </Card.Text>
      </Card.Body>
    </Card>


<Card style={{width:'18rem',backgroundColor:"rgba(255, 255, 255, 0.359",alignItems:'center' , textAlign:'center'}}>
<img src="./src/images/efficient.png" height="150px" width="150px" alt="" />
      <Card.Body>
        <Card.Title>Efficient Tracking</Card.Title>
        <Card.Text>
        Keep track of your employees' performance.
        </Card.Text>
      </Card.Body>
    </Card> 

       

<Card style={{width:'18rem',backgroundColor:"rgba(255, 255, 255, 0.359",alignItems:'center' , textAlign:'center' }}>
<img src="./src/images/secure.png" height="150px" width="150px" alt="" />
      <Card.Body>
        <Card.Title>Secure and Reliable</Card.Title>
        <Card.Text>
        Ensure your data is secure with our security features.
        </Card.Text>
      </Card.Body>
    </Card> 
        
          </div>
        </Row>
    </Container>
    </div>
    
  );
};

export default Home;
