import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css';
import { useState } from 'react';



function NavScrollExample() {

  const [arena,setArena] = useState("");
  const [img,setImg] = useState("");
  const [team,setTeam] = useState("");
  const [value,setValue] = useState("");

    const fetching = () => {
        const url = process.env.REACT_APP_API || "http://localhost:4000/";

        fetch(url + value)
          .then(response => response.json())
        .then(data => {
            console.log(data);
            setArena(data[0].arena.name);
            setImg(data[0].city.img[0]);
            setTeam(data[0].team.name);
      })
  
    }

  return (
    <div className='nav-container'>
    <Navbar bg="primary" expand="sm">
      <Container fluid>
        <Navbar.Brand className='navItem' href="https://www.nba.com/news" target='_blank'>NBA News</Navbar.Brand>
        <Navbar.Toggle className='navItem' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link className='navItem' href="#action1">Home</Nav.Link>
            <Nav.Link className='navItem' href="#action2">Link</Nav.Link>
            
            <Nav.Link className='navItem' href="#" >
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                setValue(e.target.value.split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' '));
              }}
            />
            <Button variant="outline-light" onClick={() => {
              fetching()
              console.log(value);
            }}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;