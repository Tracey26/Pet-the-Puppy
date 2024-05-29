let points = 0
let sbs = 0
let mbs = 0
let sc = 0
let gc = 0
let gr = 0
let dl = 0
let bd = 0
let gs = 0
let dm = 0
let pointsTracker = document.getElementById("pointsTracker")
let pupGcost = document.getElementById("pupGcost")

function pupGcost() {
    let cost = 10 + pts ** 1.5
    if (points >= cost) {
        points = points - cost

        pointsTracker.innerText = points.toFixed(2)
        
        pts = pts + 1

        ptsAmount.innerText = pts + 'pts have'


    }
    

}

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
    mbs = mbs + 1
    console.log(points)
    pointsTracker.innerText = points.toFixed(2)
}

function superCharge() {
    points = points - 30
    sc = sc + 1
    console.log(points)
    pointsTracker.innerText = points.toFixed(2)
}

function gameChanger() {
    points = points - 40
    gc = gc + 1
    console.log(points)
    pointsTracker.innerText = points.toFixed(2)
}

function goldenRet() {
    points = points - 500
    gr = gr + 1
    console.log(points)
    pointsTracker.innerText = points.toFixed(2)
}

function dalmatian() {
    points = points - 1000
    dl = dl + 1
    console.log(points)
    pointsTracker.innerText = points.toFixed(2)
}

function boxerDog() {
    points = points - 5000
    bd = bd + 1
    console.log(points)
    pointsTracker.innerText = points.toFixed(2)
}

function germanShep() {
    points = points - 10000
    gs = gs + 1
    console.log(points)
    pointsTracker.innerText = points.toFixed(2)
}

function doberMan() {
    points = points - 50000
    dm = dm + 1
    console.log(points)
    pointsTracker.innerText = points.toFixed(2)
}

function gameLoop() {
    points = points + (0.2 * sbs)
    points = points + (0.4 * mbs)
    points = points + (0.6 * sc)
    points = points + (1.0 * gc)
    pointsTracker.innerText = points.toFixed(2)
}

function petPoints() {
}

setInterval(gameLoop, 1000)

