const homeCard = document.getElementById("homeCard");

const noteCard = document.getElementById("noteCard");

const noteText = document.getElementById("noteText");

document.getElementById("openNote").onclick = function(){

    homeCard.style.display = "none";

    noteCard.style.display = "block";

   noteText.innerHTML = `
لا تخف لأني معك.<br><br>

لا تتلفت لأني إلهك.<br><br>

قد أيدتك وأعنتك وعضدتك بيمين بري.<br><br>

<span class="verse">
(إشعياء ٤١ : ١٠)🌼
</span>
`;
}

document.getElementById("backBtn").onclick = function(){

    noteCard.style.display = "none";

    homeCard.style.display = "block";

}
