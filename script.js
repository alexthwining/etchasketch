// globals
const DEFAULT_GRID = 16;
const gridContainer = document.querySelector("#grid-container");
const controlContainer = document.querySelector("#control-container");
const sizeRange = document.querySelector("#size-range");
const sizeLabel = document.querySelector("#size-label");
const newGridBtn = document.querySelector(".new");
const clearBtn = document.querySelector(".clear");
let userGridSize = 0;

let cells = [];
function createGrid(gridSize) {
    gridContainer.style.gridTemplateColumns = (`repeat(${gridSize}, 1fr`);
    gridContainer.style.gridTemplateRows = (`repeat(${gridSize}, 1fr`);
    let totalCells = gridSize * gridSize;
    for(let i = 0; i < totalCells; i++) {
        cells[i] = document.createElement("div");
        cells[i].classList.add("cell");
        cells[i].style = 'background-color: rgba(255, 255, 255, 1)';
        gridContainer.appendChild(cells[i]);
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
    });

    clearBtn.addEventListener("click", () => {
        console.log("will clear");
    });

    // hover effect for each cell
    cells.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = "rgba(199, 100, 100, 1)";
        });
    });


}




createGrid(DEFAULT_GRID);
addListeners();

console.log(userGridSize);