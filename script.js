// =============================
// Sticky Memories
// script.js
// =============================

// العناصر الأساسية
const homeCard = document.getElementById("homeCard");
const envelopeContainer = document.getElementById("envelopeContainer");
const envelope = document.getElementById("envelope");

const noteCard = document.getElementById("noteCard");
const noteText = document.getElementById("noteText");

const openBtn = document.getElementById("openNote");
const backBtn = document.getElementById("backBtn");

// =============================
// فتح الظرف
// =============================

openBtn.addEventListener("click", () => {

    // إخفاء الصفحة الرئيسية
    homeCard.style.display = "none";

    // إظهار الظرف
    envelopeContainer.style.display = "flex";

});

// =============================
// الضغط على الظرف
// =============================

envelope.addEventListener("click", () => {

    const flap = document.querySelector(".flap");
    const letter = document.querySelector(".letter-preview");

    // فتح الغطاء
    flap.style.transform = "rotateX(180deg)";

    // خروج الورقة
    letter.style.transform = "translateY(-90px)";

    // بعد انتهاء الأنيميشن
    setTimeout(() => {

        envelopeContainer.style.display = "none";

        noteCard.style.display = "block";

        // الرسالة الحالية
        noteText.innerHTML = `
        Sometimes life becomes lighter
        <br><br>
        just because you're in it. 🌼
        `;

    }, 900);

});

// =============================
// زر الرجوع
// =============================

backBtn.addEventListener("click", () => {

    noteCard.style.display = "none";

    homeCard.style.display = "block";

    // إعادة الظرف لوضعه الطبيعي
    envelopeContainer.style.display = "none";

    document.querySelector(".flap").style.transform = "rotateX(0deg)";

    document.querySelector(".letter-preview").style.transform = "translateY(0px)";

});
