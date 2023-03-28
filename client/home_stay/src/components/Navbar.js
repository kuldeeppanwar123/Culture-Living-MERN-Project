import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import './Navbar.css';
import logo from "../assets/logo.png";

export function NavBar() {
  const navStyle = {
    color: "white",
    backgroundColor: "#a248eb",
    position: "fixed",
    width: "100%",
    top: "0",
    zIndex: "2",
  };
  return (
    <div style={navStyle}>
      <Navbar bg="nav-color" variant="dark" expand="lg" style={navStyle}>
        <Container fluid>
          {/* <Navbar.Brand href="#">Culture Living</Navbar.Brand> */}
          <img src={logo} alt="" height={"65px"} />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link className="font-color">Home</Nav.Link>
              </LinkContainer>

              <NavDropdown
                className="font-color"
                title="Homestays"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3"> Madhya Paradesh </NavDropdown.Item>
                <NavDropdown.Item href="#action3">Delhi</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Goa</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Kashmir</NavDropdown.Item>
              </NavDropdown>

              <LinkContainer to="/about">
                <Nav.Link className="font-color">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="font-color"> Contact </Nav.Link>
              </LinkContainer>

            </Nav>
            
            <NavDropdown
              className="c-flex"
              style={{ "margin-right": "70px" }}
              title="Login/Signup"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/hostlogin">Host</NavDropdown.Item>
              <NavDropdown.Item href="/guestlogin">Guest</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
