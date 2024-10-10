let paintings = [
    'A Sunday Afternoon on the Island of La Grande Jatte.jpg',
    'Girl with the pearl earring.jpg',
    'Mona Lisa.jpg',
    'Starry Night.jpg',
    'The Arnolfini Portrait.jpg',
    'Venus.jpg'
];

function generateRandomImage() {
    let randomIndex = Math.floor(Math.random() * paintings.length);
    let selectedPainting = paintings[randomIndex];
    let imgElement = document.getElementById('randomImage');
    imgElement.src = selectedPainting;
}