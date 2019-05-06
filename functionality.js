function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    //validation

    if(billAmount === "" || serviceQuality == 0) {
        window.alert("Please enter the value!")
        return;
    }
    
    if(numPeople==="" || numPeople <= 1) {
        numPeople=1;

        document.getElementById("each").style.display = "none";
    }
    else {
        document.getElementById("each").style.display = "block";

    }

    var total = (billAmount*serviceQuality)/numPeople;
   
    total = total.toFixed(2);
    
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Clicking the button calls the function 

document.getElementById("calculate").onclick = function() {
    calculateTip();
};


