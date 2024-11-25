const btn = document.createElement("button")
btn.classList.add("btn")
btn.textContent = "New painting"
btn.addEventListener("click", () => {
    let size
    do {
        size = Number(prompt("Enter the size of your next painting"))
    } while (size > 100)
    mainBlock.innerHTML = ""
    let side = 100 / size

    for (let i = 0; i < size**2; i++) {
        const tile = document.createElement("div")
        tile.style.opacity = 0.1;
        tile.style.width = side + "vh"
        tile.style.height = side + "vh"
        tile.classList.add("tile")
        mainBlock.appendChild(tile);
        
    }
})
document.body.appendChild(btn)

const mainBlock = document.createElement("div")
mainBlock.classList.add("main")
for (let i = 0; i < 256; i++) {
    const tile = document.createElement("div")
    tile.style.opacity = 0.1;
    tile.classList.add("tile")
    mainBlock.appendChild(tile);
    
}
document.body.appendChild(mainBlock)

mainBlock.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    event.target.style.opacity = Number(event.target.style.opacity) + 0.1
})