import { useState, useContext, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import MyContext from "../StateManagement/SessionContext";

function TopNavbar() {
  const { loginSession, setLogin, getLogin, setLogout } = useContext(MyContext); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const doLogin = () => { 
    if(!loginSession.isLoggedIn) {
      console.log('do Login')
      setLogin();
    } 
  }

  useEffect(()=> {
    setIsLoggedIn(loginSession.isLoggedIn)
  }, [loginSession.isLoggedIn])

  
  return (
    <>
      <Navbar bg="primary" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            {/* SIL Banking Service */}
          </Navbar.Brand>
          {isLoggedIn && (
            <Nav className="header-links">
              <span className="cursor-pointer"  onClick={()=>setLogout()}>Logout</span>
            </Nav>
          )}
          {!isLoggedIn && (
            <Nav className="header-links">
              <span className="cursor-pointer"  onClick={doLogin}>Login</span>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;
