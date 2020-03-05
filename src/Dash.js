import React from "react";
import { Spinner } from 'react-bootstrap';
import {ControlButtons, ToggleButtonGroupControlled} from './Boots.js'


export function Dashboard() {
  return(
    <div id="main" className="main">
      <Controls />
      <Dashes />
    </div>
  )
}

function Controls() {
    return(
      <div className="controls">
        <ToggleButtonGroupControlled />


      </div>
    )
}


function Dashes() {
    return(
        <div className="dash">
            <Maps />
            <Lyrics />
        </div>
    )
}

function Maps(props) {
    return(
      <div id="map">
          <Spinner animation="border" variant="primary" />
      </div>

    )
}

function Lyrics(props) {
  return(
    <div id="lyrics">
      <form id="formm">
        <h3>Search for Lyrics</h3>
        Artist: <input type="text" id="inputartist" />
        Title: <input type="text" id="inputtitle" />
        <div id="lyricsOut">SEARCH</div>
      </form>
    </div>

  )
}
