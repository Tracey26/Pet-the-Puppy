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


function buyPupG() {
    let cost = 10 + sbs ** 1.5
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(2)

        sbs = sbs + 1

        sbsAmount.innerText = sbs + ' Small Boosts owned'
        sbsCost.innerText = (10 + (sbs ** 1.5)).toFixed(0) + " Points"
        pupGcost.innerText = 10 + sbs ** 1.5

        cost = 10 + sbs ** 1.5
    }

    else {
        alert("not enough points")

    }
}

function buyMbs() {
    let cost = 20 + mbs ** 1.5
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(2)

        mbs = mbs + 1

        mbsAmount.innerText = mbs + 'Medium Boots owned'
        mbsCost.innerText = (20 + (mbs ** 1.5)).toFixed(0) + " Points"
        buyMbs.innerText = 20 + mbs ** 1.5

        cost = 20 + mbs ** 1.5
    }

    else {
        alert("not enough points")

    }
}

function buySuper() {
    let cost = 30 + sc ** 1.5
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(2)

        sc = sc + 1

        scAmount.innerText = sc + 'Super chargers owned'
        buySuper.innerText = 30 + sc ** 1.5

        cost = 30 + sc ** 1.5
    }

    else {
        alert("not enough points")

    }
}

function buyChanger() {
    let cost = 40 + gc ** 1.5
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(2)

        gc = gc + 1

        gcAmount.innerText = gc + 'Game Changers owned'
        buyChanger.innerText = 40 + gc ** 1.5

        cost = 40 + gc ** 1.5
    }

    else {
        alert("not enough points")

    }
}

function goldenRet() {
    let cost = 500 + gr ** 1.5
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(2)

        gr = gr + 1

        grAmount.innerText = gr + 'Golden Retrievers owned'
        goldenRet.innerText = 500 + gr ** 1.5

        cost = 500 + gr ** 1.5
    }

    else {
        alert("not enough points")

    }
}

function dalmatian() {
    let cost = 1000 + dl ** 1.5
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(2)

        dl = dl + 1

        dlAmount.innerText = dl + 'Dalmatians owned'
        dalmatian.innerText = 1000 + dl ** 1.5

        cost = 1000 + dl ** 1.5
    }

    else {
        alert("not enough points")

    }
}

function boxerDog() {
    let cost = 5000 + bd ** 1.5
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(2)

        bd = bd + 1

        bdAmount.innerText = bd + 'Boxer Dog owned'
        boxerDog.innerText = 5000 + bd ** 1.5

        cost = 5000 + bd ** 1.5
    }

    else {
        alert("not enough points")

    }
}

function germanShep() {
    let cost = 10000 + gs ** 1.5
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(2)

        gs = gs + 1

        gsAmount.innerText = gs + 'German Shepard owned'
        germanShep.innerText = 10000 + gs ** 1.5

        cost = 10000 + gs ** 1.5
    }

    else {
        alert("not enough points")

    }
}

function doberMan() {
    let cost = 50000 + dm ** 1.5
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(2)

        dm = dm + 1

        dmAmount.innerText = dm + 'German Shepard owned'
        doberMan.innerText = 50000 + dm ** 1.5

        cost = 50000 + dm ** 1.5
    }

    else {
        alert("not enough points")

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

let bgMusic = new Howl({
    src: ['Caketown 1.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.3,
})

function muteMusic (){
    bgMusic.pause()
}

function petPoints() {
}

setInterval(gameLoop, 1000)

