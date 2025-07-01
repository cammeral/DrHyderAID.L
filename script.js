// الأسئلة
const questions = [
    // التسمم الغذائي والدوائي
    {
        question: "أي من الحالات التالية تُعد سببًا شائعًا للتسمم الغذائي؟",
        options: [
            "شرب ماء بارد",
            "تناول طعام محكم الغلق",
            "أكل دجاج غير مطبوخ جيدًا",
            "شرب عصير طبيعي"
        ],
        correctAnswer: 2,
        topic: "التسمم الغذائي"
    },
    {
        question: "الطفل بلع دواء الضغط الخاص بوالده، هذا يعتبر نوع من التسمم",
        options: [
            "غذائي",
            "طبيعي",
            "دوائي",
            "نفسي"
        ],
        correctAnswer: 2,
        topic: "التسمم الدوائي"
    },
    {
        question: "من الأعراض الشائعة للتسمم الغذائي:",
        options: [
            "بطء في ضربات القلب",
            "مغص وإسهال",
            "طفح جلدي",
            "فقدان البصر"
        ],
        correctAnswer: 1,
        topic: "التسمم الغذائي"
    },
    {
        question: "شنو أول شي لازم تسويه إذا شكيت بحالة تسمم؟",
        options: [
            "تعطيه مي",
            "تخليه ينام",
            "تخليه يزوع",
            "تتصل بالإسعاف أو مركز السموم فورًا"
        ],
        correctAnswer: 3,
        topic: "الإسعافات الأولية للتسمم"
    },
    {
        question: "إذا تسمم الشخص باستنشاق مادة سامة، أول خطوة تكون:",
        options: [
            "تخليه يستلقي",
            "تعطيه حليب",
            "تطلعه لمكان فيه هواء نقي",
            "تجبره على التقيؤ"
        ],
        correctAnswer: 2,
        topic: "التسمم الكيميائي"
    },
    {
        question: "إذا كان المصاب فاقد الوعي، شنو تسوي؟",
        options: [
            "تخليه يشرب مي",
            "تعطيه دوا مضاد",
            "تمدده على الجنب",
            "تحركه بشكل عشوائي"
        ],
        correctAnswer: 2,
        topic: "الإسعافات الأولية"
    },
    {
        question: "أحد أخطر أنواع التسمم الدوائي هو بسبب:",
        options: [
            "قلة شرب الماء",
            "تناول بندول بجرعة كبيرة",
            "أكل فواكه قبل النوم",
            "التمارين الشاقة"
        ],
        correctAnswer: 1,
        topic: "التسمم الدوائي"
    },
    {
        question: "من الأمثلة على التسمم الكيميائي:",
        options: [
            "أكل بيض منتهي",
            "شرب كلور عن طريق الخطأ",
            "أكل فطر سام",
            "بلع دواء ضغط"
        ],
        correctAnswer: 1,
        topic: "التسمم الكيميائي"
    },
    {
        question: "متى تظهر أعراض التسمم الغذائي عادة؟",
        options: [
            "خلال 12-24 ساعة",
            "بعد أسبوع",
            "فورًا بعد الأكل",
            "خلال 1 إلى 6 ساعات بعد الأكل"
        ],
        correctAnswer: 3,
        topic: "التسمم الغذائي"
    },
    {
        question: "ما الخطأ الكبير اللي ممكن يسوي الشخص بمصاب بتسمم وهو مو متأكد من نوعه؟",
        options: [
            "يخليه ينام",
            "يعطيه دوا مهدئ",
            "يعالجه عشوائيًا",
            "يراقبه بدون تدخل"
        ],
        correctAnswer: 2,
        topic: "الإسعافات الأولية"
    },
    // إصابات الرأس وفقدان الوعي
    {
        question: "شنو أكثر نوع من إصابات الرأس خطورة حسب الجدول؟",
        options: [
            "ضربة خفيفة (سطحية)",
            "كدمة سطحية",
            "ارتجاج",
            "نزف داخلي أو كسر جمجمة"
        ],
        correctAnswer: 3,
        topic: "أنواع إصابات الرأس"
    },
    {
        question: "علامة خطيرة تدل على ضغط داخل الجمجمة هي:",
        options: [
            "دوخة خفيفة",
            "استفراغ متكرر",
            "صداع بسيط",
            "فقدان التوازن"
        ],
        correctAnswer: 1,
        topic: "علامات الخطر"
    },
    {
        question: "إذا المريض بدأ يهلوس أو يتشنج، هذا يدل على:",
        options: [
            "غيبوبة خفيفة",
            "إصابة في العين",
            "إصابة دماغية",
            "التهاب بالحلق"
        ],
        correctAnswer: 2,
        topic: "علامات الخطر العالي"
    },
    {
        question: "في حالة ارتجاج الدماغ، من التعليمات المهمة:",
        options: [
            "استخدام الهاتف بشكل طبيعي",
            "راحة تامة من الضوء والضوضاء",
            "شرب قهوة قوية",
            "ممارسة الرياضة"
        ],
        correctAnswer: 1,
        topic: "الارتجاج"
    },
    {
        question: "شنو التصرف الصحيح إذا المصاب فاقد الوعي؟",
        options: [
            "تعطيه مي",
            "ترفع راسه",
            "تخليه على الجنب وتراقب التنفس",
            "تخليه ينام"
        ],
        correctAnswer: 2,
        topic: "الإسعافات الأولية"
    },
    {
        question: "واحدة من العلامات المطمئنة بعد إصابة الرأس هي:",
        options: [
            "نزيف من الأنف",
            "تشوش بالذاكرة",
            "وعي طبيعي وتذكر الحادث",
            "استفراغ متكرر"
        ],
        correctAnswer: 2,
        topic: "علامات مطمئنة"
    },
    {
        question: "إذا المصاب بدأ يتقيأ أو يدوخ، شنو تسوي؟",
        options: [
            "تخليه يرتاح",
            "تخليه ينام",
            "تاخذه فوراً للطوارئ",
            "تعطيه عصير"
        ],
        correctAnswer: 2,
        topic: "الإسعافات الأولية"
    },
    {
        question: "ليش من الممنوع تخلي المصاب ينام بعد الضربة؟",
        options: [
            "راح يحلم كثير",
            "حتى ما يغيب عن الوعي بدون ما تنتبه",
            "لأنه راح يعصب",
            "لأن النوم يسبب ألم أكثر"
        ],
        correctAnswer: 1,
        topic: "أخطاء شائعة"
    },
    {
        question: "من خطوات الوقاية من إصابات الرأس للأطفال:",
        options: [
            "تشجيعهم على الجري على أرض مبللة",
            "تركهم يلعبون بالسلم",
            "وضع حمايات على الزوايا والسلالم",
            "إطفاء الأنوار في البيت"
        ],
        correctAnswer: 2,
        topic: "الوقاية"
    },
    {
        question: "ليش ما يصير تعطي المصاب دوا صداع قوي بعد الضربة؟",
        options: [
            "حتى ما ينام",
            "لأنه ما راح يبلعه",
            "لأنه ممكن يغطي على أعراض خطيرة",
            "لأنه راح ينسى اسمه"
        ],
        correctAnswer: 2,
        topic: "الممنوعات بعد الإصابة"
    },
    // لدغات الحشرات والزواحف
    {
        question: "شنو أكثر أنواع اللدغات خطورة حسب التصنيف؟",
        options: [
            "لدغة نملة",
            "لسعة بعوض",
            "لسعة دبور",
            "لدغة عقرب أو أفعى"
        ],
        correctAnswer: 3,
        topic: "أنواع اللدغات"
    },
    {
        question: "من أعراض لسعة نحلة أو دبور:",
        options: [
            "دوخة وفقدان الوعي دائمًا",
            "انتفاخ وألم بالمكان",
            "اختفاء الأعراض خلال دقائق",
            "فقدان الشهية فقط"
        ],
        correctAnswer: 1,
        topic: "لسعة الحشرات السامة"
    },
    {
        question: "شنو التصرف الصحيح إذا كانت اللسعة بسيطة؟",
        options: [
            "تحك مكان اللسعة",
            "تغسل المكان بصابون ومي بارد",
            "تمص مكان اللسعة",
            "تربطها برباط ضاغط"
        ],
        correctAnswer: 1,
        topic: "الإسعاف البسيط"
    },
    {
        question: "علامة تدل على تحسس خطير من لسعة نحلة:",
        options: [
            "احمرار موضعي بسيط",
            "حكة خفيفة بالجلد",
            "تورم في الشفاه وصعوبة تنفس",
            "ألم فقط عند اللمس"
        ],
        correctAnswer: 2,
        topic: "ردود الفعل التحسسية"
    },
    {
        question: "إذا كانت اللدغة من عقرب أو أفعى، شنو أول خطوة تسويها؟",
        options: [
            "تمشي المصاب شوي حتى يروح الألم",
            "تغسل الجرح بصابون",
            "تهدئة المصاب وتثبيت الطرف المصاب",
            "تحط كريم موضعي"
        ],
        correctAnswer: 2,
        topic: "الإسعافات للحالات الخطيرة"
    },
    {
        question: "ليش ما يجوز تغسل جرح لدغة أفعى بمي؟",
        options: [
            "لأن المي يعقم المكان",
            "لأن السم ممكن ينتشر أكثر",
            "لأن الجلد يصير ناشف",
            "لأنها تسبب ألم زيادة"
        ],
        correctAnswer: 1,
        topic: "ممنوعات التعامل مع اللدغة"
    },
    {
        question: "شنو الخطر من مص الجرح بالفم؟",
        options: [
            "يخفف السم",
            "ما بيه مشكلة",
            "يدخل السم بجسم المسعف",
            "ينشف الجرح"
        ],
        correctAnswer: 2,
        topic: "تصرفات خاطئة"
    },
    {
        question: "من خطوات الوقاية من لدغات الأفاعي والحشرات:",
        options: [
            "المشي حافي بالمناطق الزراعية",
            "خزن الأكل بشكل جيد",
            "ترك الأطفال يلمسون الحشرات",
            "عدم تنظيف الفراش قبل النوم"
        ],
        correctAnswer: 1,
        topic: "الوقاية"
    },
    {
        question: "في حالة الحساسية الشديدة بعد لسعة، شنو أول تصرف؟",
        options: [
            "تعطيه عصير",
            "تحك مكان اللسعة",
            "تخليه ينام",
            "تتصل بالإسعاف فوراً"
        ],
        correctAnswer: 3,
        topic: "الإسعاف الفوري"
    },
    {
        question: "شنو الخطر من ربط الطرف المصاب رباط ضاغط قوي؟",
        options: [
            "يوقف النزيف",
            "يمنع الألم",
            "يقطع الدم ويزيد التورم",
            "يساعد على امتصاص السم"
        ],
        correctAnswer: 2,
        topic: "تصرفات ممنوعة"
    }
];

// رسائل تحفيزية
const motivationalMessages = {
    pass: [
        "ممتاز! أنت على دراية كبيرة بالإسعافات الأولية.",
        "إنجاز رائع! يمكنك الاعتماد على نفسك في حالات الطوارئ.",
        "تهانينا! معرفتك بالإسعافات الأولية ممتازة.",
        "عمل جيد! أنت مستعد لمساعدة الآخرين في الحالات الطارئة.",
        "أحسنت! معرفتك قد تنقذ حياة أحدهم يومًا ما."
    ],
    fail: [
        "لا تقلق! يمكنك تحسين معرفتك بالمزيد من الدراسة.",
        "كلنا نتعلم من أخطائنا. استمر في التعلم!",
        "هذه فرصة لمعرفة المزيد عن الإسعافات الأولية.",
        "المهم أنك حاولت. استمر في التعلم!",
        "الإسعافات الأولية مهمة. خذ وقتك لتعلمها جيدًا."
    ]
};

// متغيرات التطبيق
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30 * 60; // 30 دقيقة بالثواني
let studentName = "";
let selectedAnswers = Array(questions.length).fill(null);

// عناصر DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const studentNameInput = document.getElementById('student-name');
const displayName = document.getElementById('display-name');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-btn');
const questionCounter = document.getElementById('question-counter');
const progressFill = document.querySelector('.progress-fill');
const timerDisplay = document.getElementById('timer');
const resultName = document.getElementById('result-name');
const correctAnswers = document.getElementById('correct-answers');
const percentage = document.getElementById('percentage');
const passFail = document.getElementById('pass-fail');
const motivationalMessage = document.getElementById('motivational-message');
const restartBtn = document.getElementById('restart-btn');
const feedbackDetails = document.getElementById('feedback-details');

// عناصر التحكم بالموسيقى
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const volumeControl = document.getElementById('volume-control');
const musicText = document.getElementById('music-text');
let isMusicPlaying = false;

// تحميل الموسيقى عند بدء الصفحة
window.addEventListener('load', () => {
    bgMusic.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    bgMusic.volume = 0.5;
});

// التحكم بتشغيل/إيقاف الموسيقى
musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicText.textContent = 'تشغيل الموسيقى';
        musicToggle.classList.remove('music-pulse');
    } else {
        bgMusic.play()
            .then(() => {
                musicText.textContent = 'إيقاف الموسيقى';
                musicToggle.classList.add('music-pulse');
            })
            .catch(error => {
                console.error('خطأ في تشغيل الصوت:', error);
                alert('لا يمكن تشغيل الموسيقى. يرجى السماح بتشغيل الصوت في الموقع.');
            });
    }
    isMusicPlaying = !isMusicPlaying;
});

// التحكم بمستوى الصوت
volumeControl.addEventListener('input', () => {
    bgMusic.volume = volumeControl.value;
});

// إيقاف الموسيقى عند الخروج من الصفحة
window.addEventListener('beforeunload', () => {
    bgMusic.pause();
});

// بدء الاختبار
startBtn.addEventListener('click', () => {
    studentName = studentNameInput.value.trim();
    if (studentName === "") {
        alert("الرجاء إدخال اسم الطالب");
        return;
    }
    
    startQuiz();
});

// بدء الاختبار
function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    displayName.textContent = studentName;
    
    // بدء المؤقت
    startTimer();
    
    // عرض السؤال الأول
    showQuestion();
}

// بدء المؤقت
function startTimer() {
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

// تحديث عرض المؤقت
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // تغيير اللون عند اقتراب الوقت من النفاذ
    if (timeLeft <= 5 * 60) { // 5 دقائق أو أقل
        timerDisplay.classList.add('warning');
    } else {
        timerDisplay.classList.remove('warning');
    }
}

// عرض السؤال الحالي
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    
    // تحديث عداد الأسئلة
    questionCounter.textContent = `سؤال ${currentQuestionIndex + 1} من ${questions.length}`;
    
    // تحديث شريط التقدم
    progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    
    // عرض الخيارات
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.classList.add('option-btn');
        if (selectedAnswers[currentQuestionIndex] === index) {
            optionBtn.classList.add('selected');
        }
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionBtn);
    });
    
    // إدارة حالة أزرار التنقل
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === questions.length - 1;
}

// اختيار إجابة
function selectOption(optionIndex) {
    selectedAnswers[currentQuestionIndex] = optionIndex;
    showQuestion();
}

// السؤال التالي
nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
});

// السؤال السابق
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

// إرسال الاختبار
submitBtn.addEventListener('click', () => {
    if (confirm("هل أنت متأكد أنك تريد إنهاء الاختبار؟")) {
        submitQuiz();
    }
});

// تصحيح الاختبار
function submitQuiz() {
    clearInterval(timer);
    
    // حساب النتيجة
    score = 0;
    questions.forEach((question, index) => {
        if (selectedAnswers[index] === question.correctAnswer) {
            score++;
        }
    });
    
    // عرض النتيجة
    showResult();
}

// عرض النتيجة
function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    const passThreshold = 15;
    const isPassed = score >= passThreshold;
    const percentageScore = Math.round((score / questions.length) * 100);
    
    resultName.textContent = studentName;
    correctAnswers.textContent = score;
    percentage.textContent = percentageScore;
    
    if (isPassed) {
        passFail.textContent = "مبروك! لقد نجحت في الاختبار";
        passFail.classList.add('pass');
        motivationalMessage.textContent = motivationalMessages.pass[Math.floor(Math.random() * motivationalMessages.pass.length)];
    } else {
        passFail.textContent = "للأسف! لم تحقق النجاح في الاختبار";
        passFail.classList.add('fail');
        motivationalMessage.textContent = motivationalMessages.fail[Math.floor(Math.random() * motivationalMessages.fail.length)];
    }
    
    // مسح المحتوى القديم أولاً
    feedbackDetails.innerHTML = '';
    
    // إضافة ملخص الأداء
    const performanceSummary = document.createElement('div');
    performanceSummary.innerHTML = '<h3>ملخص الأداء حسب الموضوعات:</h3>';
    feedbackDetails.appendChild(performanceSummary);
    
    // تجميع النتائج حسب الموضوع
    const topics = {};
    questions.forEach((question, index) => {
        if (!topics[question.topic]) {
            topics[question.topic] = { correct: 0, total: 0 };
        }
        topics[question.topic].total++;
        if (selectedAnswers[index] === question.correctAnswer) {
            topics[question.topic].correct++;
        }
    });
    
    // عرض النتائج حسب الموضوع
    for (const topic in topics) {
        const topicScore = Math.round((topics[topic].correct / topics[topic].total) * 100);
        const topicElement = document.createElement('div');
        topicElement.className = 'topic-result';
        topicElement.innerHTML = `
            <p><strong>${topic}:</strong> ${topics[topic].correct} من ${topics[topic].total} (${topicScore}%)</p>
            <div class="topic-progress">
                <div class="topic-progress-fill" style="width: ${topicScore}%"></div>
            </div>
        `;
        feedbackDetails.appendChild(topicElement);
    }
    
    // إضافة تفاصيل الإجابات
    const answersReview = document.createElement('div');
    answersReview.className = 'answers-review';
    answersReview.innerHTML = '<h3>تفاصيل الإجابات:</h3>';
    feedbackDetails.appendChild(answersReview);
    
    // عرض جميع إجابات الطالب مع التصحيح
    questions.forEach((question, index) => {
        const answerElement = document.createElement('div');
        answerElement.className = 'answer-detail';
        
        const isCorrect = selectedAnswers[index] === question.correctAnswer;
        const userAnswer = selectedAnswers[index] !== null ? 
            question.options[selectedAnswers[index]] : "لم يتم الإجابة";
        const correctAnswerText = question.options[question.correctAnswer];
        
        answerElement.innerHTML = `
            <div class="question-number">السؤال ${index + 1}</div>
            <div class="question-text">${question.question}</div>
            <div class="user-answer ${isCorrect ? 'correct' : 'incorrect'}">
                <strong>إجابتك:</strong> ${userAnswer}
            </div>
            ${!isCorrect ? `
            <div class="correct-answer">
                <strong>الإجابة الصحيحة:</strong> ${correctAnswerText}
            </div>` : ''}
            <div class="question-topic"><strong>الموضوع:</strong> ${question.topic}</div>
        `;
        
        answersReview.appendChild(answerElement);
    });
    
    // إرسال النتائج إلى بوت تليجرام
    sendToTelegram(studentName, score, selectedAnswers);
}

// إرسال النتائج إلى بوت تليجرام
function sendToTelegram(name, score, answers) {
    const botToken = '7776732020:AAHbPI4j5La3ZR8JUQCr9YPdLKUpJDMK1XQ';
    const chatId = '6670082375';
    
    // تحضير رسالة النتائج
    let message = `📊 نتائج اختبار الإسعافات الأولية\n`;
    message += `👤 اسم الطالب: ${name}\n`;
    message += `✅ الدرجة: ${score}/${questions.length}\n`;
    message += `📅 التاريخ: ${new Date().toLocaleString()}\n\n`;
    message += `🔹 تفاصيل الإجابات:\n`;
    
    // إضافة تفاصيل الإجابات
    questions.forEach((q, index) => {
        const isCorrect = answers[index] === q.correctAnswer;
        const userAnswer = answers[index] !== null ? 
            q.options[answers[index]] : "لم يتم الإجابة";
        
        message += `\nالسؤال ${index + 1}: ${q.question}\n`;
        message += `إجابتك: ${userAnswer} ${isCorrect ? '✅' : '❌'}\n`;
        if (!isCorrect) {
            message += `الإجابة الصحيحة: ${q.options[q.correctAnswer]}\n`;
        }
    });
    
    // إرسال الطلب إلى API تليجرام
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        })
    })
    .then(response => response.json())
    .then(data => console.log('تم إرسال النتائج:', data))
    .catch(error => console.error('خطأ في الإرسال:', error));
}

// إعادة الاختبار
restartBtn.addEventListener('click', () => {
    // إعادة تعيين المتغيرات
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 30 * 60;
    selectedAnswers = Array(questions.length).fill(null);
    
    // العودة إلى شاشة البداية
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
    studentNameInput.value = studentName;
});

// تهيئة الأسئلة
function initializeQuestions() {
    // يمكن إضافة المزيد من الأسئلة هنا إذا لزم الأمر
}

initializeQuestions();