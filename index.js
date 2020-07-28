var circle = document.getElementById("circle");
var name = document.getElementById("name");  var next = document.getElementById("next");
var back = document.getElementById("back");

var rotateValue = "rotate(0deg)";
var rotateSum;

    next.onclick = function()
    {
        rotateSum = rotateValue + "rotate(-60deg)";
        home.style.transform = rotateSum;
        rotateValue = rotateSum;
    }

    back.onclick = function()
    {
        rotateSum = rotateValue + "rotate(+60deg)";
        home.style.transform = rotateSum;
        rotateValue = rotateSum;
    }

