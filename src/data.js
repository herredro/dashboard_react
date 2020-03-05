export const fetchGeo = async () => {
    let response = await navigator.geolocation.getCurrentPosition(data => {
        console.log('first ', data);
        const {latitude,longitude} = data.coords;
        fetchMap(latitude, longitude);
    })
}

export const fetchMap = (xx, yy) => {
    var mymap = L.map('map').setView([xx, yy], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    var marker = L.marker([xx,yy]).addTo(mymap);
}

function fillDiv(data, div) {
    div.innerText = data.toString()
}

export async function fetchLyrics (artist, title) {
    let response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
    let data = await response.json();
    console.log('data ', data.lyrics)
    fillDiv(data.lyrics, lyricsOut)
}
