const btn = document.querySelector("#btnSelectGridSize");
btn.addEventListener("click", function(){
    console.log("button pushed");
    let userInput = prompt("Input a number (1-100) to select a grid size. Any number larger than 100 will default to 100");
    let newGridSize = Number(userInput);
    if (newGridSize > 100){
        newGridSize = 100;
        createGrid(newGridSize);
    }else if (newGridSize < 1){
        gridSize = 1;
        createGrid(newGridSize);
    }else{
        createGrid(newGridSize);
    }
});


function createGrid(gridSize){
    sketchpadContainer.replaceChildren();
    //add event listener that changes background color
    sketchpadContainer.addEventListener("mouseover", function(e){
        e.stopPropagation();
        e.target.style.backgroundColor = "black";     
    // e.target.style.backgroundColor = getRandomRGB();
    let pixelOpacity = +e.target.style.opacity + 0.1;

    console.log(pixelOpacity);
    e.target.style.opacity = pixelOpacity;
    // console.log(e.target.style.opacity);
    });

    //Add rows
    for(let i=0;i<gridSize;i++){
    const sketchRow = document.createElement("div");
    sketchRow.setAttribute("id", `row-${i}`);
    sketchRow.classList.add("flex-row");
    sketchpadContainer.appendChild(sketchRow);
    
    //Add pixels to rows
        for(let j = 0; j< gridSize; j++){
            const thisSketchpadRow = document.querySelector(`#row-${i}`);
            const sketchPixel = document.createElement("div");
            sketchPixel.setAttribute("id", `pixel-${i}${j}`);
            sketchPixel.classList.add("flex-item");
            thisSketchpadRow.appendChild(sketchPixel);
        }//loop to add pixels to rows
    }//loop to create rows
    addEventListener
}//createGrid

function getRandomRGB(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r}, ${g}, ${b})`;
}