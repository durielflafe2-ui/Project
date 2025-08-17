let homeScore = 0
let guestScore = 0
let homePoint=document.getElementById("homepoints")
let guestPoint=document.getElementById("guestpoints")
//document.getElementById("homepoints")
homePoint.textContent = homeScore
//document.getElementById("guestpoints")
guestPoint.textContent = guestScore
console.log(homeScore)
console.log(guestScore)
function home1point(){
    homeScore=homeScore+1
    homePoint.textContent=homeScore
    console.log(homeScore)
}
function home2point(){
    homeScore=homeScore+2
    homePoint.textContent=homeScore
    console.log(homeScore)
}
function home3point(){
    homeScore=homeScore+3
    homePoint.textContent=homeScore
    console.log(homeScore)
}

function guest1point(){
    guestScore=guestScore+1
    guestPoint.textContent=guestScore
    console.log(guestScore)
}
function guest2point(){
    guestScore=guestScore+2
    guestPoint.textContent=guestScore
    console.log(guestScore)
}
function guest3point(){
    guestScore=guestScore+3
    guestPoint.textContent=guestScore
    console.log(guestScore)
}