const homeCard = document.getElementById("homeCard");
const noteCard = document.getElementById("noteCard");
const noteText = document.getElementById("noteText");
const openNoteBtn = document.getElementById("openNote");
const backBtn = document.getElementById("backBtn");

// قائمة بالآيات المشجعة بالعربي
const verses = [
    `لاَ تَخَفْ لأَنِّي مَعَكَ.<br><br>لاَ تَتَلَفَّتْ لأَنِّي إِلهُكَ.<br><br>قَدْ أَيَّدْتُكَ وَأَعَنْتُكَ وَعَضَدْتُكَ بِيَمِينِ بِرِّي.<br><br><span class="verse">(إشعياء ٤١ : ١٠)🌼</span>`,
    
    `رَبُّنَا هُوَ الْمُتَقَدِّمُ أَمَامَكَ.<br><br>هُوَ يَكُونُ مَعَكَ. لاَ يُهْمِلُكَ وَلاَ يَتْرُكُكَ.<br><br>لاَ تَخَفْ وَلاَ تَرْتَعِبْ.<br><br><span class="verse">(تثنية ٣١ : ٨)✨</span>`,
    
    `تَعَالَوْا إِلَيَّ يَا جَمِيعَ الْمُتْعَبِينَ وَالثَّقِيلِي الأَحْمَالِ،<br><br>وَأَنَا أُرِيحُكُمْ.<br><br><span class="verse">(متى ١١ : ٢٨)🤍</span>`,
    
    `سَلاَمًا أَتْرُكُ لَكُمْ. سَلاَمِي أُعْطِيكُمْ.<br><br>لاَ تَضْطَرِبْ قُلُوبُكُمْ وَلاَ تَخَفْ.<br><br><span class="verse">(يوحنا ١٤ : ٢٧)🕊️</span>`,
    
    `أَسْتَطِيعُ كُلَّ شَيْءٍ فِي الْمَسِيحِ الَّذِي يُقَوِّينِي.<br><br><span class="verse">(فيلبي ٤ : ١٣)💪</span>`,
    
    `تَوَكَّلْ عَلَى الرَّبِّ بِكُلِّ قَلْبِكَ،<br><br>وَعَلَى فَهْمِكَ لاَ تَعْتَمِدْ.<br><br>فِي كُلِّ طُرُقِكَ اعْرِفْهُ، وَهُوَ يُقَوِّمُ سُبُلَكَ.<br><br><span class="verse">(أمثال ٣ : ٥-٦)🌱</span>`,

    `سِرَاجٌ لِرِجْلِي كَلاَمُكَ وَنُورٌ لِسَبِيلِي.<br><br><span class="verse">(مزمور ١١٩ : ١٠٥)💡</span>`
];

openNoteBtn.onclick = function() {
    // اختيار آية عشوائية من القائمة
    const randomIndex = Math.floor(Math.random() * verses.length);
    noteText.innerHTML = verses[randomIndex];

    homeCard.style.display = "none";
    noteCard.style.display = "block";
};

backBtn.onclick = function() {
    noteCard.style.display = "none";
    homeCard.style.display = "block";
};
