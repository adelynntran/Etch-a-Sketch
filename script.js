
        
import Grid from "./Grid.js";

document.addEventListener('DOMContentLoaded', () => {
    const sketchContainer = document.getElementById('sketch-container');
    const sizeInput = document.getElementById('size-choosing');
    const sizeButton = document.getElementById('size-button');
    const hexInput =document.getElementById('hex-code');
    const submitButton = document.getElementById('submit-button');
    const eraseButton = document.getElementById('erase-button');
    const saveColorButton = document.getElementById('save-color-button');
    const colorSelector = document.getElementsByClassName('color');
    const gridBoxArray = [];
    


    //initializ grid with default size
    let currentGrid = new Grid(sketchContainer, 16);
    let selectedColor = 'white';

    //size selection
    sizeButton.addEventListener('click', () => {
        const gridSize = parseInt(sizeInput.value, 10) || 16; //if input invalid, size changes to 16
        currentGrid = new Grid(sketchContainer, gridSize);
        currentGrid.setColor(selectedColor);
        console.log(`Size ${gridSize} is choosen.`)
    });

    

    //change the color of the box:
    for (let i = 0; i < colorSelector.length; i++) {
        console.log(colorSelector[i].classList);
        colorSelector[i].addEventListener('click', () => {
            const colorElement = event.currentTarget;
            const colorClass = colorElement.classList[1];
            const color = getColorName(colorClass);
            selectedColor = color;
            currentGrid.setColor(selectedColor);
            console.log(`Choosen color: ${selectedColor}`);
        })
    }

function getColorName(color){
    switch (color) {
        case 'red':
            return 'red';
            break;
        case 'orange':
            return 'orange';
            break;
        case 'yellow':
            return 'yellow';
            break;
        case 'green':
            return 'green';
            break;
        case 'blue':
            return 'blue';
            break;
        case 'indigo':
            return 'indigo';
            break;
        case 'violet':
            return 'violet';
            break;
        case 'black':
            return 'black';
            break;
        case 'white':
            return 'white';
            break;
        default:
            return 'white';
    }
}
    



submitButton.addEventListener('click', () => {
    let hexColor = hexInput.value;
    if (!hexColor.includes('#')) {
        hexColor = '#' + hexColor;
    }
    selectedColor = hexColor;
    currentGrid.setColor(selectedColor)
    console.log(`Color selected: ${selectedColor}`);
})
    
    eraseButton.addEventListener('click', () => {
        const boxes = sketchContainer.getElementsByClassName('grid-box');
        for (let box of boxes) {
            box.style.backgroundColor = 'white';
        }
        console.log('Sketch has been erased.');
    })

function addColorCircle() {
    const defaultColor = document.getElementById('default-color');
    let hexColor = hexInput.value;
    if (!hexColor.includes('#')) {
        hexColor = '#' + hexColor;
    }
    let newColor = document.createElement('div');
    newColor.classList.add('color');
    defaultColor.appendChild(newColor);
    newColor.style.width = '50px';
    newColor.style.height = '50px';
    newColor.style.border = '1px solid black';
    newColor.style.borderRadius = '100%';
    newColor.style.backgroundColor = hexColor;

    console.log(`Color ${hexInput.value} is saved.`);

}


saveColorButton.addEventListener('click', addColorCircle);
    
}

)



