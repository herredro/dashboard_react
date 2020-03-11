import * as data from './data.js'

function hideElement(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
};

function fetchLyrics(){
    let artist = inputartist.value
    let title = inputtitle.value
    console.log(artist,title)
    data.fetchLyrics(artist, title);
}

window.onload = function () {
  console.log('External: onload fired');


  // lyricsOut.onclick = fetchLyrics

  data.fetchGeo();
};



document.addEventListener('DOMContentLoaded', function () {
    console.log('External: DOM fully loaded and parsed');
})
