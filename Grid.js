
export default class Grid {
  
    constructor(gridElement, gridSize) {
        this.gridElement = gridElement;
        this.gridSize = gridSize;

        this.createGrid();
    }

    createGrid() {
        //Calculate the size of each cell based on the grid size
        const cellSize = 960 / this.gridSize;
        this.gridElement.style.setProperty('--grid-size', this.gridSize);
        this.gridElement.style.setProperty('--cell-size', `${cellSize}px`);

        //Clear any existing grid elements
        this.gridElement.innerHTML = '';

        //Create the grid
        for (let i=0; i < this.gridSize * this.gridSize; i++) {
            const box = document.createElement('div');
            box.classList.add('grid-box');
            box.addEventListener('click', () => {
                if (this.currentColor) {
                    box.style.backgroundColor = this.currentColor;
                }
            })
            this.gridElement.appendChild(box);


        }

        
    }
    setColor(color) {
        this.currentColor = color;
    }
}