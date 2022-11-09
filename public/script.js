console.log('script js loaded');
const btnLoad = document.getElementById('btnload');
const dogfactContent = document.getElementById('dogfact');
const dogContainer = document.querySelector('.dog-content');
const dogImage = document.getElementById('dogimage');

const getDogFact = async () => {
    await fetch('/dogfact')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        dogfactContent.textContent = data.fact;
    })
    .catch(err => console.log(err))
}

const getDogImage = async () => {
    console.log("logging get dog image");

    await fetch('/dogimage')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        dogImage.removeAttribute('src');
        dogImage.setAttribute('src', data.message);
    })
    .catch(err => console.log(err))
}


// calling multiple func in a click
btnLoad.addEventListener('click', () => {
    dogContainer.classList.add('showContent');
    getDogFact();
    getDogImage();
});