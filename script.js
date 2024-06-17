
function drawOnSketch(block, color='pink'){
    block.style.backgroundColor = color;
}


// create sketch box based on blockSize
function createSketchBox(size){
    for(let i = 0; i < size; i++){ //loop to create rows for etch a sketch
        let blockRow = document.createElement('div');
        sketchContainer.appendChild(blockRow);
        blockRow.classList.toggle('block-row');

    
        for(let j = 0; j < size; j++) // fill row with block elements
            {
                let block = document.createElement('div');
                blockRow.appendChild(block);
                block.classList.toggle('block');
                block.addEventListener('mouseover', () => drawOnSketch(block));
            }
    }
}


function removeSketchBox(size){ // remove grid from sketch box
    box = document.querySelectorAll('.block');
    boxRow = document.querySelectorAll('.block-row');

    box.forEach((element) => element.remove());
    boxRow.forEach((element) => element.remove());
}
function setUpSketch(){ // set up etch a sketch with entered value
    removeSketchBox();
    let go = true;
    let blockSize = 16;
    while(go){
        blockSize = prompt("Enter Size of box");
        blockSize = Number(blockSize);
        if(!Number.isInteger(blockSize) || blockSize < 1 || blockSize >= 100){
            alert("Error: try again");
        }
        else{
            go = false;
        }
    }
    createSketchBox(blockSize);
}

let sketchContainer = document.querySelector('.sketch-container');
let button = document.querySelector('button');
button.addEventListener('click', () => setUpSketch());