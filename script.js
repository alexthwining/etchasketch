// globals
const DEFAULT_GRID = 16;
const gridContainer = document.querySelector("#grid-container");
const controlContainer = document.querySelector("#control-container");
const sizeRange = document.querySelector("#size-range");
const sizeLabel = document.querySelector("#size-label");
const newGridBtn = document.querySelector(".new");
const clearBtn = document.querySelector(".clear");
const defaultBtn = document.querySelector(".default");
const eraserBtn = document.querySelector(".eraser");
const rainbowBtn = document.querySelector(".rainbow");
const picker = document.querySelector(".picker");
let userGridSize = 0;

let cells = [];
function createGrid(gridSize) {
    gridContainer.style.gridTemplateColumns = (`repeat(${gridSize}, 1fr`);
    gridContainer.style.gridTemplateRows = (`repeat(${gridSize}, 1fr`);
    let totalCells = gridSize * gridSize;
    for(let i = 0; i < totalCells; i++) {
        cells[i] = document.createElement("div");
        cells[i].classList.add("cell");
        cells[i].style = "background-color: rgb(255, 255, 255)";
        gridContainer.appendChild(cells[i]);
    }

    // hover effect for each cell
    cells.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = "rgb(0, 0, 0)";
        });
    });
}

function clearGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function addListeners() {
    // size range event listener
    sizeRange.addEventListener("input", () => {
        userGridSize = sizeRange.value;
        sizeLabel.textContent = `Grid size: ${sizeRange.value}`;
    });

    newGridBtn.addEventListener("click", () => {
        console.log("userGridSize: " + userGridSize);
        clearGrid();
        if(userGridSize < 1) {
            createGrid(DEFAULT_GRID);
        }
        createGrid(userGridSize);
    });

    clearBtn.addEventListener("click", () => {
        clearGrid();
        if(userGridSize < 1) {
            createGrid(DEFAULT_GRID);
        }
        createGrid(userGridSize);
    });

    defaultBtn.addEventListener("click", () => {
        // hover effect for each cell
        cells.forEach(item => {
            item.addEventListener("mouseenter", () => {
                item.style.backgroundColor = "rgb(0, 0, 0)";
            });
        });
    });

    eraserBtn.addEventListener("click", () => {
        // hover effect for each cell
        cells.forEach(item => {
            item.addEventListener("mouseenter", () => {
                item.style.backgroundColor = "rgb(255, 255, 255)";
            });
        });
    });

    rainbowBtn.addEventListener("click", () => {
        // rainbow hover effect for each cell
        cells.forEach(item => {
            item.addEventListener("mouseenter", () => {
                item.style.backgroundColor = `rgb(${colorRand()})`;
            });
        });
    });

    picker.addEventListener("input", () => {
        // chosen color hover effect for each cell
        cells.forEach(item => {
            item.addEventListener("mouseenter", () => {
                item.style.backgroundColor = picker.value;
            });
        });
    });

}

// gets randomized color
function colorRand() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return [r,g,b];
}

createGrid(DEFAULT_GRID);
addListeners();
