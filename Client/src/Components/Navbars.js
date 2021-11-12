import React, {useState, useEffect} from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import axios from "axios";
import { FaHornbill, FaAddressCard, FaPalette, FaUserAstronaut, FaShoppingCart, FaSplotch, FaHome, FaUserCheck, FaUserTimes } from 'react-icons/fa';

const Navbars = () => {
    const {loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently} = useAuth0();
    const [textButton, setTextButton] = useState('Login')
    const [Name, setName] = useState('')
    const [validar, setValidar] = useState(false)

    useEffect(() => {

      if(isAuthenticated){
        setTextButton('Logout')
         setName( user.name)
      }else{
        setTextButton('Login')
        setName('') 
      }
        
    }, [isAuthenticated])

    useEffect(()=>{
        const getToken = async ()=>{
            const accessToken = await getAccessTokenSilently();
            localStorage.setItem('token', accessToken)
        }
        if(isAuthenticated){
            const email = user.email;
            axios.get(`http://localhost:3977/api/V1/login/`+email).then((res) =>{
              const datos = (res.data.find_u)
              if (datos.length === 0) {
                setValidar(false)
                logout({ returnTo: window.location.origin})
                }else{
                  if(datos.map((value)=> value.email) == email){
                    setValidar(true)
                    getToken();
                  }else{
                    setValidar(false)
                    logout({ returnTo: window.location.origin})
                  }
                }
            })
            
        }
    }, [isAuthenticated, getAccessTokenSilently])
    
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        
    <Navbar.Brand ><FaHornbill size={30} color={"yellow"}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link ><button className="btn btn-dark"><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Inicio <FaHome size={20} color={"white"}/></Link></button></Nav.Link> 
            <Nav.Link ><button className="btn btn-dark"><Link to='/features' style={{ textDecoration: 'none', color: 'white' }}>Sobre Nosotros <FaSplotch size={20} color={"white"}/></Link></button></Nav.Link> 
        {  
            validar?
            
            <button className="btn btn-dark">     
            <NavDropdown title={Name} id="navbarScrollingDropdown">
            <NavDropdown.Item >
              <Link to='/dash' style={{ textDecoration: 'none', color: 'black' }}><FaPalette size={20} color={"black"}/> Productos</Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <Link to='/ventas' style={{ textDecoration: 'none', color: 'black' }}><FaShoppingCart size={20} color={"black"}/> Ventas</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item >
              <Link to='/roles' style={{ textDecoration: 'none', color: 'black' }}><FaUserAstronaut size={20} color={"black"}/> Usuarios</Link>
            </NavDropdown.Item>
            
            </NavDropdown>
            </button>
            
            :
          null
        }  
          
          
        </Nav>
        
        {
          isAuthenticated ?
          <button
          onClick={()=>logout({ returnTo: window.location.origin})}
          className="btn btn-danger"> {textButton} <FaUserTimes size={20} color={"black"}/></button> :
          
          <button
          onClick={() => loginWithRedirect()}
          className="btn btn-info"> {textButton} <FaUserCheck size={20} color={"black"}/></button>
        }



        <Nav>
        <Nav.Link ><button className="btn btn-dark"><Link to='/Registro' style={{ textDecoration: 'none', color: 'white' }}>Registro <FaAddressCard size={20} color={"white"}/></Link></button></Nav.Link >
        </Nav>


      </Navbar.Collapse>
    </Container>

  </Navbar>
    )
}

export default Navbars
