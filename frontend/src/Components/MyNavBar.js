import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './MyNavBar.css';
import { useState, useEffect } from 'react';

function OffcanvasExample() {

  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navi");
      if (navbar) {
        const sticky = 40; //navbar.offsetTop
        console.log('scrollY = ', window.scrollY, 'sticky=', sticky, 'isSticky=', isSticky);
  
        if (window.scrollY >= sticky) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };
  
    // Attach the event listener
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);

  return (

    <div className={isSticky ? 'sticky-navbar' : ''}>

      {['md'].map((expand) => (
        <Navbar id='navi' key={expand} expand={expand} className='bg-body-tertiary mb-3'>
          <Container fluid>
            <Navbar.Brand className='my' href="#">Pallawala Resort</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Pallawala Resort
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                <NavDropdown
                    title="Home"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className='drop-down-list'
                  >
                    <NavDropdown.Item href="#action3">Pallwala Resort</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Location
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">
                      Services & Activities
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Rooms"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className='drop-down-list'
                  >
                    <NavDropdown.Item href="#action3">See all rooms</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Special offers
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Booking policy
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Contact"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className='drop-down-list'
                  >
                    <NavDropdown.Item href="#action3">Contact-us</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Book your stay
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item> */}
                  </NavDropdown>
                </Nav>

                  <Button variant="outline-success" className='drop-down-list'>Book Now</Button>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>

  );
}

export default OffcanvasExample;