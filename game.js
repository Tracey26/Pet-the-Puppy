let points = 0
let sbs = 0
let pointsTracker = document.getElementById("pointsTracker")

function increasePoints() {
    points = points + 1
    console.log(points)
    pointsTracker.innerText = points.toFixed(2)

}

function smallBoost() {
    points = points - 10
    sbs = sbs + 1
    console.log(points)
    pointsTracker.innerText = points.toFixed(2)

}

function mediumBoost() {
    points = points - 20
}

function gameLoop() {
    points = points + (0.2 * sbs)
    pointsTracker.innerText = points.toFixed(2)
}

function petPoints() {
}

setInterval(gameLoop, 1000)

