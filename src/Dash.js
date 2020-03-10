import React, { useState, useEffect }  from "react";
import { Spinner } from 'react-bootstrap';


export function Dashboard() {
  // The Dashboard calls the components Dashes (the content) & Controls (Togglers for showing/hiding content)
  // Problem: Both Child Components are only able to sync when the state that is passed from "Dashboard" is a single, simple variable.
  //          When State-Object is used: toggle function activates, changes the state, but Dashes Component is not updated...

  // Version State-Object (does not work)
  const [state, setState] = useState({maps: true, lyrics: true, others: true});
  function objToggle() {
    Object.assign(state, {lyrics:!state.lyrics})
    setState(state)
    console.log(state)
  }

  // Version State-Variable (works)
  let [lyrics, setLyrics] = useState(true);
  function varToggle (){
    setLyrics(!lyrics)
    console.log(lyrics)
  }


  return(
    // Controls gets passed the toggle (i.e. setState) function, Dashes gets passed the state value
    <div id="main" className="main">
      <Controls toggle={objToggle}/>
      <Dashes show={state.lyrics}/>
    </div>
  )
}


function Controls(props) {
    return(
      // Lyrics button gets the toggle function to "setState" of lyrics.
      <div>
        <button className="control_button" id="button_maps">Maps</button>
        <button className="control_button" id="button_lyrics" onClick={props.toggle}>Lyrics</button>
        <button className="control_button" id="button_others">Others</button>
      </div>
    )
}


function Dashes(props) {
  return(
    <div className="dash" >
      <Maps />
      {/* Passes show-boolean to Lyrics component. Ideally, with an object state, I would pass {props.show.lyrics} */}
      <Lyrics show={props.show} />
    </div>
  )
}

function Lyrics(props) {
  return(
    // Show only when props.show == true
    <div id="lyrics" className={props.show ? 'show': 'hide'} >
      <form id="formm">
        <h3>Search for Lyrics</h3>
        Artist: <input type="text" id="inputartist" />
        Title: <input type="text" id="inputtitle" />
        <div id="lyricsOut">SUBMIT</div>
      </form>
    </div>
  )
}


function Maps(props) {
  let returner = (
    <div
      id="map"
      // currently maps is always showing
      style={{ display: (true ? 'block' : 'none') }}>
        <Spinner animation="border" variant="primary" />
    </div>)
  return(returner)
}
