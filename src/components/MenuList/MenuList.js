import React from "react";
import "./MenuList.scss";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/Actions/Auth";
import { getAuth } from "../../store/Selectors/Auth";

function MenuList() {
  const dispatch = useDispatch();
  const auth = useSelector(getAuth);

  const handleLogout = () => {
    dispatch(logOut());
  };

  if (!auth.isAuthenticated) {
    return null;
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/news" className="nav-link">News</NavLink>
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
        </Nav>
        <Nav>
          <NavDropdown title={auth.username} id="basic-nav-dropdown" className="capitalize">
            <NavDropdown.Item onClick={handleLogout} className="capitalize">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MenuList;
