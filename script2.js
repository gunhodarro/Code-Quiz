var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log("highScores",highScores)
var highScoreselement =document.getElementById("highScores")
for (i = 0; i < highScores.length; i++) {
  
 var newElement =   document.createElement("li")
 newElement.textContent=highScores[i].initials + ":"+highScores[i].score
highScoreselement.append(newElement)
}

    // highScoreselement.textContent = highScores[0].initials
var clear = document.getElementById("clearBtn");
clear.onclick = function () {
    console.log("cleared!")
    localStorage.clear();
};
