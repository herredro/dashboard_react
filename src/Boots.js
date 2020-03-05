import React from 'react';
import {useState} from 'react';
import { Button, ButtonToolbar, Navbar, Nav, NavDropdown, Form, FormControl, Container, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';



export const ControlButtons = () => {
  return(
    <div>

        <Button variant="primary">Primary</Button>
        <Button variant="secondary" className="ml-1">Secondary</Button>
        <Button variant="success" className="ml-1">Success</Button>

    </div>
  )
};

export function ToggleButtonGroupControlled() {
  const [value, setValue] = useState([1, 2, 3]);

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  const handleChange = val => setValue(val);

  return (
    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton value={1}>Map</ToggleButton>
      <ToggleButton value={2}>Lyrics</ToggleButton>
      <ToggleButton value={3}>Other</ToggleButton>
    </ToggleButtonGroup>
  );
};

export const Navbars = () => {
  return(
    <div id="navbar">
  <Navbar bg="dark" variant="dark" fixed='top'>
    <Navbar.Brand href="#home">
      <img src="src/media/xwlogo.jpg" />
      Dash
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="https://wiki.kreuzwerker.de">Wiki</Nav.Link>
      <Nav.Link href="https://intranet.kreuzwerker.de">Intranet</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
</div>
  )
};
