const homeCard = document.getElementById("homeCard");

const noteCard = document.getElementById("noteCard");

const noteText = document.getElementById("noteText");

document.getElementById("openNote").onclick = function(){

    homeCard.style.display = "none";

    noteCard.style.display = "block";

    noteText.innerHTML =
    `Sometimes life becomes lighter just because you're in it. 🌼`;
}

document.getElementById("backBtn").onclick = function(){

    noteCard.style.display = "none";

    homeCard.style.display = "block";

}
