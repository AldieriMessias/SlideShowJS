
const images = [
    {'id': '1', 'url':'./img/lampBrake.jpg'},
    {'id': '2', 'url':'./img/lampOn.jpg'},
    {'id': '3', 'url':'./img/lampOff.jpg'},
    {'id': '4', 'url':'./img/tlGreen.jpg'},
    {'id': '5', 'url':'./img/tlYellow.jpg'},
    {'id': '6', 'url':'./img/tlRed.jpg'},
    {'id': '7', 'url':'./img/tlOff.jpg'},

]

const containerItems = document.querySelector('#container-items');


const loadImages = (images, container) => {
    images.forEach( image  => {
        container.innerHTML += `
        <div class='item'> 
            <img src='${image.url}'></img>
        </div>        
        `
    })

}


loadImages ( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = ( ) => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}


const next = ( ) => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)
