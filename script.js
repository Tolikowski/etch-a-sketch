function createCanvas(size) {
    //create div
    const div = document.createElement("div");
    const canvas = document.querySelector("#canvas")

    div.classList.add("square");

    //append size-amount rows to canvas
    for (i = 0; i < size; i++) {
        canvas.append(div);
        console.log(canvas)
    }
    //append size-amount divs into rows
}

createCanvas(10);