import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

//css file
import styles from "./NavbarComponent.module.css";

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              className={styles.navbar_logo}
              alt="Exam Tool Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar-menu-link">
              <NavLink className={styles.navbar_menu_link} to="home">
                Home
              </NavLink>
              <NavLink className={styles.navbar_menu_link} to="aboutus">
                About Us
              </NavLink>
              <NavLink className={styles.navbar_menu_link} to="contactus">
                Contact Us
              </NavLink>
              <NavLink className={styles.navbar_menu_link} to="adminpage">
                Admin Page
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
