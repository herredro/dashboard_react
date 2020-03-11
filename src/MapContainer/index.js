import React, { useState, useEffect }  from "react";
import { Spinner } from 'react-bootstrap';
import regeneratorRuntime from "regenerator-runtime";

/*
 *
 *
 * HAVE A LOOK AT https://react-leaflet.js.org/
 *
 *
 */


import './MapContainer.css'

let MapContainer = (props) => {

  let classes = ["MapContainer"];
  classes.push(props.className);

  // I add all relevant functions and variables to the specific component to keep track of where everything lies
  const position = [51.505, -0.09];

  // we only want to start the map when the component is mounted
  useEffect(() => {

  }, [])
  // using an empty array here, means basically once the component is mounted, otherwise we can force a rerender evertime a variable changes

  return(
    // Lyrics button gets the toggle function to "setState" of lyrics.
    <div
     id="map"
      className={classes.join(' ')}>
      <Spinner animation="border" variant="primary" />
    </div>
  )
}

export default MapContainer;
