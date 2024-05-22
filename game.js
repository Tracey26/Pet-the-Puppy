let points = 0
            let pointsTracker = document.getElementsById("pointsTracker")

            function increasePoints() {
                points = points + 1
                pointsTracker.innerText = points + 'Pet Points'
    
            }
