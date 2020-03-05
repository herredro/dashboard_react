import React from "react";
import { Spinner } from 'react-bootstrap';


export function Dashboard() {
  return(
      <div className="main">
          <Dashes />
          <Controls />
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


function Controls() {
    return(
      <div className="controls">
      </div>
    )
}
