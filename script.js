// DOM Selection
// document.getElementId() -> Element
const judul = document.getElementById('judul')
judul.style.color = 'blue';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'LightFox';

// document.getElementsByTagName()
// -> HTMLCollections
const p = document.getElementsByTagName('p');

for ( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'lightBlue';
}

const h1 = document.getElemnetsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName()
// -> HTMLCollection
const p1 = document.getElememntByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari JavaScript'; 