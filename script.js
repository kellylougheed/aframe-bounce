let container = document.querySelector("#container")
let colors = ["red", "orange", "yellow", "green", "blue", "purple", "hotpink"]

for (let i = 0; i < 75; i++) {
    addBall()
}

function addBall() {
    let x = Math.random() * 10 - 5
    let y = Math.random() * 50 + 2
    let z = Math.random() * 10 - 3
    container.innerHTML += `<a-sphere id="ball" dynamic-body position="${x} ${y} ${z}" radius="0.5" color="${colors[Math.floor(Math.random() * colors.length)]}" mass="0.5"></a-sphere>`
}
