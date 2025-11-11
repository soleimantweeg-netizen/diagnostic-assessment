// بيانات الأسئلة
const questions = [
    // المجال الأول: الإدارة (القيادة) المدرسية (10 أسئلة)
    {
        domain: "الإدارة (القيادة) المدرسية",
        weight: "25%",
        text: "تضع المدرسة خطة تشغيلية مكتملة العناصر وفق أهداف تطويرية محددة، وتتابع تنفيذها بما يضمن تحقيق أهدافها."
    },
    {
        domain: "الإدارة (القيادة) المدرسية",
        weight: "25%",
        text: "تعزز المدرسة القيم الإسلامية والهوية الوطنية."
    },
    {
        domain: "الإدارة (القيادة) المدرسية",
        weight: "25%",
        text: "تلتزم المدرسة بقيم مهنة التعليم وأخلاقياتها."
    },
    {
        domain: "الإدارة (القيادة) المدرسية",
        weight: "25%",
        text: "توفر المدرسة مناخاً آمناً للتعلم والنمو نفسياً واجتماعياً."
    },
    {
        domain: "الإدارة (القيادة) المدرسية",
        weight: "25%",
        text: "تنشر المدرسة قواعد السلوك والمواظبة، وتتابع تطبيقها."
    },
    {
        domain: "الإدارة (القيادة) المدرسية",
        weight: "25%",
        text: "توفر المدرسة برامج وأنشطة تربوية داعمة للسلوك الإيجابي."
    },
    {
        domain: "الإدارة (القيادة) المدرسية",
        weight: "25%",
        text: "توفر المدرسة برامج وأنشطة إثرائية غير صفية لتطوير مواهب المتعلمين، وتهيئتهم للمستقبل."
    },
    {
        domain: "الإدارة (القيادة) المدرسية",
        weight: "25%",
        text: "تعزز المدرسة بناء العلاقات الإيجابية والتعاون في المجتمع المدرسي، ومشاركة الأسرة في تعلم أبنائها، والشراكة المجتمعية."
    },
    {
        domain: "الإدارة (القيادة) المدرسية",
        weight: "25%",
        text: "تدعم المدرسة التطوير المهني لمنسوبيها وفقاً لنتائج تقويم الأداء الوظيفي واحتياجاتهم."
    },
    {
        domain: "الإدارة (القيادة) المدرسية",
        weight: "25%",
        text: "تطبق المدرسة التقويم الذاتي المبني على المعايير المعتمدة من الهيئة، وتنفذ خطة للتحسين بناءً على نتائجه."
    },
    
    // المجال الثاني: التعليم والتعلم (12 سؤالاً)
    {
        domain: "التعليم والتعلم",
        weight: "30%",
        text: "توفر المدرسة فرصاً متكافئة للتعلم تلبي احتياجات المتعلمين ومنهم ذوو الإعاقة والموهوبون."
    },
    {
        domain: "التعليم والتعلم",
        weight: "30%",
        text: "تدعم المدرسة تنفيذ المناهج لتحقيق نواتج التعلم المستهدفة وفق الخطة الدراسية."
    },
    {
        domain: "التعليم والتعلم",
        weight: "30%",
        text: "تنوع المدرسة في إستراتيجيات التدريس لتلبية احتياجات المتعلمين ودعم تعلمهم."
    },
    {
        domain: "التعليم والتعلم",
        weight: "30%",
        text: "تفعل المدرسة التعلم الإلكتروني لتلبية احتياجات المتعلمين ودعم تعلمهم."
    },
    {
        domain: "التعليم والتعلم",
        weight: "30%",
        text: "توفر المدرسة أنشطة تعلم تطبيقية ترتبط بحياة المتعلمين."
    },
    {
        domain: "التعليم والتعلم",
        weight: "30%",
        text: "تنمي المدرسة المهارات القرائية والعددية الأساسية لدى المتعلمين."
    },
    {
        domain: "التعليم والتعلم",
        weight: "30%",
        text: "تنمي المدرسة مهارات التفكير العليا لدى المتعلمين."
    },
    {
        domain: "التعليم والتعلم",
        weight: "30%",
        text: "تنمي المدرسة المهارات العاطفية والاجتماعية لدى المتعلمين."
    },
    {
        domain: "التعليم والتعلم",
        weight: "30%",
        text: "تنمي المدرسة المهارات الرقمية لدى المتعلمين."
    },
    {
        domain: "التعليم والتعلم",
        weight: "30%",
        text: "تعزز المدرسة دافعية المتعلمين للتعلم والاستمتاع به."
    },
    {
        domain: "التعليم والتعلم",
        weight: "30%",
        text: "تقوم المدرسة أداء المتعلمين باستخدام أساليب وأدوات تقويم متنوعة وفاعلة."
    },
    {
        domain: "التعليم والتعلم",
        weight: "30%",
        text: "تحلل المدرسة نتائج التقويم وتوظفها في تحسين نواتج التعلم بانتظام، وتقدم التغذية الراجعة للمتعلمين."
    },
    
    // المجال الثالث: نواتج التعلم (12 سؤالاً)
    {
        domain: "نواتج التعلم",
        weight: "30%",
        text: "يحقق المتعلمون نتائج متقدمة في مجالات القراءة والرياضيات والعلوم وفقاً للاختبارات الوطنية."
    },
    {
        domain: "نواتج التعلم",
        weight: "30%",
        text: "يحقق المتعلمون تقدماً في مجال القراءة قياساً على مستوى أداء المدرسة السابق في الاختبارات الوطنية."
    },
    {
        domain: "نواتج التعلم",
        weight: "30%",
        text: "يحقق المتعلمون تقدماً في مجال الرياضيات قياساً على مستوى أداء المدرسة السابق في الاختبارات الوطنية."
    },
    {
        domain: "نواتج التعلم",
        weight: "30%",
        text: "يحقق المتعلمون تقدماً في مجال العلوم قياساً على مستوى أداء المدرسة السابق في الاختبارات الوطنية."
    },
    {
        domain: "نواتج التعلم",
        weight: "30%",
        text: "يظهر المتعلمون الاعتزاز بالقيم والهوية الوطنية."
    },
    {
        domain: "نواتج التعلم",
        weight: "30%",
        text: "يظهر المتعلمون اتجاهات إيجابية نحو ذواتهم."
    },
    {
        domain: "نواتج التعلم",
        weight: "30%",
        text: "يظهر المتعلمون التزاماً بالممارسات الصحية السليمة."
    },
    {
        domain: "نواتج التعلم",
        weight: "30%",
        text: "يشارك المتعلمون في الأنشطة المجتمعية والأعمال التطوعية."
    },
    {
        domain: "نواتج التعلم",
        weight: "30%",
        text: "يلتزم المتعلمون بقواعد السلوك والانضباط المدرسي."
    },
    {
        domain: "نواتج التعلم",
        weight: "30%",
        text: "يظهر المتعلمون القدرة على البحث والتعلم الذاتي."
    },
    {
        domain: "نواتج التعلم",
        weight: "30%",
        text: "يظهر المتعلمون اعتزازاً بثقافتهم واحتراماً للتنوع الثقافي في المجتمع."
    },
    {
        domain: "نواتج التعلم",
        weight: "30%",
        text: "يحقق المتعلمون نتائج متقدمة في جميع المواد الدراسية."
    },
    
    // المجال الرابع: البيئة المدرسية (6 أسئلة)
    {
        domain: "البيئة المدرسية",
        weight: "15%",
        text: "تنظيم مبنى المدرسة ملائم لعدد المتعلمين والمرحلة العمرية."
    },
    {
        domain: "البيئة المدرسية",
        weight: "15%",
        text: "تتوافر فصول ومعامل ملائمة للعملية التعليمية تلبي احتياجات المتعلمين ومنهم ذوو الإعاقة."
    },
    {
        domain: "البيئة المدرسية",
        weight: "15%",
        text: "تلبي المرافق والخدمات المساندة احتياجات المتعلمين ومنهم ذوو الإعاقة."
    },
    {
        domain: "البيئة المدرسية",
        weight: "15%",
        text: "تتوافر في فصول المدرسة ومعاملها وجميع مرافقها متطلبات الأمن والسلامة."
    },
    {
        domain: "البيئة المدرسية",
        weight: "15%",
        text: "تعمل المدرسة على صيانة جميع مرافق المبنى وتجهيزاته بانتظام."
    },
    {
        domain: "البيئة المدرسية",
        weight: "15%",
        text: "تعمل المدرسة على نظافة المبنى المدرسي وجميع مرافقه بانتظام."
    }
];

// المتغيرات العامة
let currentQuestionIndex = 0;
const answers = new Array(questions.length).fill(null);

// العناصر
const domainTitle = document.getElementById('domainTitle');
const domainWeight = document.getElementById('domainWeight');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const currentQuestion = document.getElementById('currentQuestion');
const totalQuestions = document.getElementById('totalQuestions');
const progressPercent = document.getElementById('progressPercent');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// تحديث العرض
function updateDisplay() {
    const question = questions[currentQuestionIndex];
    
    // تحديث معلومات السؤال
    domainTitle.textContent = `المجال: ${question.domain}`;
    domainWeight.textContent = `الوزن النسبي: ${question.weight}`;
    questionNumber.textContent = currentQuestionIndex + 1;
    questionText.textContent = question.text;
    
    // تحديث التقدم
    currentQuestion.textContent = currentQuestionIndex + 1;
    totalQuestions.textContent = questions.length;
    const percent = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);
    progressPercent.textContent = percent;
    progressFill.style.width = `${percent}%`;
    
    // تحديث الإجابة المحفوظة
    const savedAnswer = answers[currentQuestionIndex];
    const radios = document.querySelectorAll('input[name="answer"]');
    radios.forEach(radio => {
        radio.checked = radio.value === savedAnswer;
    });
    
    // تحديث الأزرار
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = false;
    
    // التمرير للأعلى
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// حفظ الإجابة
function saveAnswer() {
    const selectedRadio = document.querySelector('input[name="answer"]:checked');
    if (selectedRadio) {
        answers[currentQuestionIndex] = selectedRadio.value;
    }
}

// السؤال السابق
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        saveAnswer();
        currentQuestionIndex--;
        updateDisplay();
    }
});

// السؤال التالي
nextBtn.addEventListener('click', () => {
    saveAnswer();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateDisplay();
    } else {
        // انتهى الاختبار
        showResults();
    }
});

// عرض النتائج
function showResults() {
    const answeredCount = answers.filter(a => a !== null).length;
    const unansweredCount = questions.length - answeredCount;
    
    let message = `تم الإجابة على ${answeredCount} من ${questions.length} سؤالاً.\n\n`;
    
    if (unansweredCount > 0) {
        message += `لم يتم الإجابة على ${unansweredCount} سؤالاً.\n\n`;
        message += `هل تريد المتابعة؟`;
        
        if (confirm(message)) {
            // البحث عن أول سؤال غير مجاب عليه
            const firstUnanswered = answers.findIndex(a => a === null);
            if (firstUnanswered !== -1) {
                currentQuestionIndex = firstUnanswered;
                updateDisplay();
            }
        }
    } else {
        message += `شكراً لإكمال الاختبار!\n\n`;
        message += `يمكنك الآن تحميل دليل التصحيح والتقييم لحساب النتائج.`;
        alert(message);
    }
}

// حفظ الإجابة عند تغيير الاختيار
document.querySelectorAll('input[name="answer"]').forEach(radio => {
    radio.addEventListener('change', saveAnswer);
});

// التهيئة الأولية
updateDisplay();
