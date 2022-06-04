import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'



export const Header =()=>{

    const cartLength =  useSelector((state)=>state.cartReducer.cartItem);
    console.log(cartLength.length)
    const navigate =  useNavigate();
    
    const handleRedirect = ()=>{
        navigate("./cartItem")
    }
    const handleRedirectToHome = ()=>{
        navigate("./")
    }



    return(
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
        <Nav>
          <Nav.Link  onClick= {handleRedirectToHome}>Home</Nav.Link>
          <Nav.Link  onClick= {handleRedirect}>Cart <Badge bg="secondary">{cartLength.length}</Badge> </Nav.Link>
          
        </Nav>
        </Container>
      </Navbar>
    )
}