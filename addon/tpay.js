
const disableWall = () =>{
    var paywallNode = document.getElementById("TEMPRORARY_METERING_ID")

    paywallNode.parentNode.style.display="none"
}

setTimeout(disableWall, 3000)