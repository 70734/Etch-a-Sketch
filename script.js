let sketchContainer = document.querySelector('.sketch-container');
let blockSize = 16;
let color = 'pink';

function drawOnSketch(block){
    block.style.backgroundColor = color;
}


// create sketch box based on blockSize
function createSketchBox(){
    for(let i = 0; i < blockSize; i++){ //loop to create rows for etch a sketch
        let blockRow = document.createElement('div');
        sketchContainer.appendChild(blockRow);
        blockRow.classList.toggle('block-row');

    
        for(let j = 0; j < blockSize; j++) // fill row with block elements
            {
                let block = document.createElement('div');
                blockRow.appendChild(block);
                block.classList.toggle('block');
                block.addEventListener('mouseover', () => drawOnSketch(block));
            }
    }
}

createSketchBox();