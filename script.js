function createCanvas(size) {
    //create div
    const canvas = document.querySelector("#canvas")

    //append size-amount rows to canvas
    for (i = 0; i < size; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        canvas.append(div);
        console.log(canvas)
    }
    //append size-amount divs into rows
}

createCanvas(10);
