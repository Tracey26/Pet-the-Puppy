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
let sbsCost = document.getElementById("sbsCost")
let mbsCost = document.getElementById("mbsCost")
let scCost = document.getElementById("scCost")
let gcCost = document.getElementById("gcCost")
let grCost = document.getElementById("grCost")
let dlCost = document.getElementById("dlCost")
let bdCost = document.getElementById("bdCost")
let gsCost = document.getElementById("gsCost")
let dmCost = document.getElementById("dmCost")
let buyMbs = document.getElementById("buyMbs")



function buyPupG() {
    let cost = (10 + sbs ** 1.5)
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(0)
        sbs = sbs + 1
        sbsAmount.innerText = sbs + ' Small Boosts owned'
        sbsCost.innerText = (10 + sbs ** 1.5).toFixed(0) + " Points"
    }

    else {
        alert("not enough points")

    }
}

function buyMed() {
    let cost = (20 + mbs ** 1.75)
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(0)
        mbs = mbs + 1
        mbsAmount.innerText = mbs + ' Medium Boots owned'
        mbsCost.innerText = (20 + mbs ** 1.75).toFixed(0) + " Points"
        buyMbs.innerText = (20 + mbs ** 1.75)
    }

    else{
        alert("not enough points")

    }
}

function buySup() {
    let cost = (30 + sc ** 2)
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(0)
        sc = sc + 1
        scAmount.innerText = sc + ' Large Boost owned'
        scCost.innerText = (30 + sc ** 2).toFixed(0) + " Points"
        buySuper.innerText = 30 + sc ** 2
    }
    else {
        alert("not enough points")

    }
}

function buyChange() {
    let cost = (40 + gc ** 2.25)
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(0)

        gc = gc + 1

        gcAmount.innerText = gc + ' XL Boost owned'
        gcCost.innerText = (40 + gc ** 2.25).toFixed(0) + " Points"
        buyChanger.innerText = 40 + gc ** 2.25
    }

    else {
        alert("not enough points")

    }
}

function goldenR() {
    let cost = (500 + gr ** 2.5)
    console.log(points >= cost)
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(0)

        gr = gr + 1

        grAmount.innerText = gr + ' Super Chargers owned'
        grCost.innerText = (500 + gr ** 2.5).toFixed(0) + " Points"
        goldenRet.innerText = 500 + gr ** 2.5
        goldBark.play()
    }

    else {
        alert("not enough points")

    }
}

function dalmat() {
    let cost =(1000 + dl ** 2.75)
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(0)

        dl = dl + 1

        dlAmount.innerText = dl + ' Mega Chargers owned'
        dlCost.innerText = (1000 + dl ** 2.75).toFixed(0) + " Points"
        dalmatian.innerText = (1000 + dl ** 2.75)
        dalBark.play()
    }


}

function boxerBuy() {
    let cost = (5000 + bd ** 3)
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(0)

        bd = bd + 1

        bdAmount.innerText = bd + ' Ultra Chargers owned'
        bdCost.innerText = (5000 + bd ** 3).toFixed(0) + " Points"
        boxerDog.innerText = 5000 + bd ** 3
        boxBark.play()

    }

    else {
        alert("not enough points")

    }
}

function germanbuy() {
    let cost = (10000 + gs ** 3.25)
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(0)

        gs = gs + 1

        gsAmount.innerText = gs + ' Ultimate Chargers owned'
        gsCost.innerText = (10000 + gs ** 3.25).toFixed(0) + " Points"
        germanShep.innerText = 10000 + gs ** 3.25
        germBark.play()
    }

    else {
        alert("not enough points")

    }
}

function doberManBuy() {
    let cost = (50000 + dm ** 5)
    if (points >= cost) {
        points = points - cost
        pointsTracker.innerText = points.toFixed(0)

        dm = dm + 1

        dmAmount.innerText = dm + ' Game Changers owned'
        dmCost.innerText = (5000 + dm ** 5).toFixed(0) + " Points"
        doberMan.innerText = 50000 + dm ** 5
        doberBark.play()
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

function gameLoop() {
    points = points + (0.2 * sbs)
    points = points + (0.4 * mbs)
    points = points + (0.6 * sc)
    points = points + (1.0 * gc)
    points = points + (5.0 * gr)
    points = points + (15. * dl)
    points = points + (30. * bd)
    points = points + (50.0 * gs)
    points = points + (100.0 * dm)
    pointsTracker.innerText = points.toFixed(2)
    if (points < 500) {
        goldenBtn.disabled = true
    } else {
        goldenBtn.disabled = false
    }

    if (points < 1000) {
        dalmBtn.disabled = true
    } else {
        dalmBtn.disabled = false
    }

    if (points < 5000) {
        boxerBtn.disabled = true
    } else {
        boxerBtn.disabled = false
    }

    if (points < 10000) {
        germBtn.disabled = true
    } else {
        germBtn.disabled = false
    }

    if (points < 50000) {
        doberBtn.disabled = true
    } else {
        doberBtn.disabled = false
    }
}

let bgMusic = new Howl({
    src: ['Caketown 1.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.25,
})

let doberBark = new Howl({
    src: ['dog.mp3'],
    volume: 0.6,
})

let germBark = new Howl({
    src: ['bark.mp3'],
    volume: 0.6,
})

let boxBark = new Howl({
    src: ['dog2.mp3'],
    volume: 0.6,
})

let dalBark = new Howl({
    src: ['dogbark2.mp3'],
    volume: 0.6,
})

let goldBark = new Howl({
    src: ['golden.mp3'],
    volume: 0.6,
})

let mute = new Howl({
    src: ['mute.wav'],
    volume: 0.5,
})

function muteMusic (){
    bgMusic.pause()
    mute.play()
}

function petPoints() {
}

setInterval(gameLoop, 1000)

