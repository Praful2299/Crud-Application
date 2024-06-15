import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbaar from '../../pages/Navbar'
import Footer from '../../pages/Footer';
import { Outlet } from 'react-router-dom';


const Layout=()=>{
    return(
        <>
         <Container fluid >
      <Row>
        <Col>
        <Navbaar/>
        <Outlet/>
        <Footer/>
        
        </Col>
      </Row>
    </Container>
        </>
    )
}
export default Layout;