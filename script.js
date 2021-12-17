const newColor = "black";

function createCanvas(size) {
    //create div
    const canvas = document.querySelector("#canvas");

    //append size-amount rows to canvas
    for (i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.height = ((canvas.offsetWidth - 0) / size) - 0 + "px";
        div.style.width = ((canvas.offsetWidth - 0) / size) - 0 + "px";
        canvas.append(div);
    }
}

//handle mouseenter and change background color of square
function changeColor(color) {
    document.querySelectorAll(".square").forEach(item => {
        item.addEventListener("mouseenter", event => {
            event.target.style.backgroundColor = color;
        })
    });
}


//resize-button
const resizeBtn = document.querySelector(".resize-btn");

resizeBtn.addEventListener("click", event => {
    const newNumber = prompt("Please enter a number between 1 and 50.", "10");
    if (newNumber > 50 || newNumber < 1) {
        alert("Error! Please enter a number between 1 and 50!")
    } else {
        document.querySelectorAll(".square").forEach(item => {
            item.remove();
        });
        createCanvas(newNumber);
        changeColor(newColor);
    }

})


createCanvas(10);
changeColor(newColor);