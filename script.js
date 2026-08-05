const homeCard = document.getElementById("homeCard");

const noteCard = document.getElementById("noteCard");

const noteText = document.getElementById("noteText");

document.getElementById("openNote").onclick = function(){

    homeCard.style.display = "none";

    noteCard.style.display = "block";

    noteText.innerHTML =
    `"لا تخف لأني معك. لا تتلفت لأني إلهك. قد أيدتك وأعنتك وعضدتك بيمين بري." (إش 41: 10). 🌼`;
}

document.getElementById("backBtn").onclick = function(){

    noteCard.style.display = "none";

    homeCard.style.display = "block";

}
