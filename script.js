function createCanvas(size) {
    //create div
    const canvas = document.querySelector("#canvas")

    //append size-amount rows to canvas
    for (i = 0; i < size*size; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.height = ((canvas.offsetWidth-2)/size)-2+"px";
        div.style.width = ((canvas.offsetWidth-2)/size)-2+"px";
        canvas.append(div);
    }
    console.log(canvas.offsetWidth);
}

createCanvas(10);