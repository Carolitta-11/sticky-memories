const homeCard = document.getElementById("homeCard");
const noteCard = document.getElementById("noteCard");
const noteText = document.getElementById("noteText");

// قائمة الرسائل (يمكنكِ إضافة أو تعديل أي رسالة هنا)
const messages = [
    `لا تخف لأني معك.<br><br>
    لا تتلفت لأني إلهك.<br><br>
    قد أيدتك وأعنتك وعضدتك بيمين بري.<br><br>
    <span class="verse">(إشعياء ٤١ : ١٠)🌼</span>`,

    `ربي يضيء سراجي. الإله يضيء ظلمتي.<br><br>
    <span class="verse">(المزامير ١٨ : ٢٨)✨</span>`,

    `عظم الرب العمل معنا، وصرنا فرحين.<br><br>
    <span class="verse">(المزامير ١٢٦ : ٣)💛</span>`,

    `أستطيع كل شيء في المسيح الذي يقويني.<br><br>
    <span class="verse">(فيليبي ٤ : ١٣)🌟</span>`,

    `سلاماً أترك لكم. سلامي أعطيكم.<br><br>
    <span class="verse">(يوحنا ١٤ : ٢٧)🕊️</span>`
];

document.getElementById("openNote").onclick = function(){
    homeCard.style.display = "none";
    noteCard.style.display = "block";

    // اختيار رسالة عشوائية من القائمة
    const randomIndex = Math.floor(Math.random() * messages.length);
    noteText.innerHTML = messages[randomIndex];
}

document.getElementById("backBtn").onclick = function(){
    noteCard.style.display = "none";
    homeCard.style.display = "block";
}
