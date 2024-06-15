import Button from 'react-bootstrap/Button';
import Display from './Display';
import { useNavigate } from 'react-router-dom';

const Employee=()=>{

    const navigate=useNavigate();

    const editnavigate=()=>{
        navigate('/addemployee')
    }

    return(
        <>
        <div style={{textAlign:"center", backgroundColor:"#8368688e"}}>
        <h1 >EMPLOYEE LIST</h1>
        </div>
        <Button variant="info" onClick={editnavigate}>Add Employee</Button>{' '}
        <Display/>
        </>
    )
}
export default Employee;