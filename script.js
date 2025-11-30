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

// معلومات المجالات
const domainsInfo = {
    "الإدارة (القيادة) المدرسية": {
        questionsCount: 10,
        weight: 0.25,
        maxScore: 40
    },
    "التعليم والتعلم": {
        questionsCount: 12,
        weight: 0.30,
        maxScore: 48
    },
    "نواتج التعلم": {
        questionsCount: 12,
        weight: 0.30,
        maxScore: 48
    },
    "البيئة المدرسية": {
        questionsCount: 6,
        weight: 0.15,
        maxScore: 24
    }
};

// المتغيرات العامة
let currentQuestionIndex = 0;
const answers = new Array(questions.length).fill(null);
let schoolInfo = {
    name: '',
    administration: '',
    date: ''
};

// العناصر
const infoCard = document.getElementById('infoCard');
const assessmentSection = document.getElementById('assessmentSection');
const resultsSection = document.getElementById('resultsSection');
const startBtn = document.getElementById('startBtn');
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

// بدء الاختبار
startBtn.addEventListener('click', () => {
    const schoolName = document.getElementById('schoolName').value.trim();
    const administration = document.getElementById('administration').value.trim();
    const assessmentDate = document.getElementById('assessmentDate').value;
    
    if (!schoolName || !administration || !assessmentDate) {
        alert('يرجى إدخال جميع البيانات المطلوبة');
        return;
    }
    
    schoolInfo = {
        name: schoolName,
        administration: administration,
        date: assessmentDate
    };
    
    infoCard.style.display = 'none';
    assessmentSection.style.display = 'block';
    updateDisplay();
});

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
    
    if (unansweredCount > 0) {
        let message = `تم الإجابة على ${answeredCount} من ${questions.length} سؤالاً.\n\n`;
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
        // حساب النتائج
        calculateResults();
    }
}

// حساب النتائج
function calculateResults() {
    // إخفاء قسم الأسئلة وعرض قسم النتائج
    assessmentSection.style.display = 'none';
    resultsSection.style.display = 'block';
    
    // عرض بيانات المدرسة
    document.getElementById('displaySchoolName').textContent = schoolInfo.name;
    document.getElementById('displayAdministration').textContent = schoolInfo.administration;
    document.getElementById('displayAssessmentDate').textContent = new Date(schoolInfo.date).toLocaleDateString('ar-SA');
    
    // حساب النتائج لكل مجال
    const domainResults = {};
    
    Object.keys(domainsInfo).forEach(domain => {
        domainResults[domain] = {
            score: 0,
            maxScore: domainsInfo[domain].maxScore,
            weight: domainsInfo[domain].weight,
            percentage: 0,
            weightedPercentage: 0
        };
    });
    
    // جمع الدرجات
    questions.forEach((question, index) => {
        const answer = answers[index];
        if (answer !== null) {
            domainResults[question.domain].score += parseInt(answer);
        }
    });
    
    // حساب النسب المئوية
    let totalWeightedPercentage = 0;
    
    Object.keys(domainResults).forEach(domain => {
        const result = domainResults[domain];
        result.percentage = (result.score / result.maxScore) * 100;
        result.weightedPercentage = result.percentage * result.weight;
        totalWeightedPercentage += result.weightedPercentage;
    });
    
    // عرض الدرجة الإجمالية
    document.getElementById('overallScore').textContent = `${Math.round(totalWeightedPercentage)}%`;
    
    // عرض نتائج المجالات
    displayDomainResults(domainResults);
    
    // عرض نقاط القوة والضعف
    displayStrengthsAndWeaknesses(domainResults);
    
    // عرض خارطة الطريق
    displayRoadmap(domainResults);
    
    // التمرير للأعلى
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// عرض نتائج المجالات
function displayDomainResults(domainResults) {
    const container = document.getElementById('domainsResults');
    container.innerHTML = '';
    
    Object.keys(domainResults).forEach(domain => {
        const result = domainResults[domain];
        const domainDiv = document.createElement('div');
        domainDiv.className = 'domain-result';
        
        domainDiv.innerHTML = `
            <h3>${domain}</h3>
            <div class="result-item">
                <span class="result-label">الدرجة المحققة:</span>
                <span class="result-value">${result.score} / ${result.maxScore}</span>
            </div>
            <div class="result-item">
                <span class="result-label">النسبة المئوية:</span>
                <span class="result-value">${Math.round(result.percentage)}%</span>
            </div>
            <div class="result-item">
                <span class="result-label">الوزن النسبي:</span>
                <span class="result-value">${Math.round(result.weight * 100)}%</span>
            </div>
            <div class="result-percentage">${Math.round(result.weightedPercentage)}%</div>
        `;
        
        container.appendChild(domainDiv);
    });
}

// عرض نقاط القوة والضعف
function displayStrengthsAndWeaknesses(domainResults) {
    const strengthsList = document.getElementById('strengthsList');
    const weaknessesContent = document.getElementById('weaknessesContent');
    
    strengthsList.innerHTML = '';
    weaknessesContent.innerHTML = '';
    
    const strengths = [];
    const weaknesses = {};
    
    // تحديد نقاط القوة والضعف
    questions.forEach((question, index) => {
        const answer = parseInt(answers[index]);
        
        if (answer >= 3) {
            // نقطة قوة
            strengths.push({
                domain: question.domain,
                text: question.text,
                score: answer
            });
        } else if (answer <= 2) {
            // نقطة ضعف
            if (!weaknesses[question.domain]) {
                weaknesses[question.domain] = [];
            }
            weaknesses[question.domain].push({
                text: question.text,
                score: answer
            });
        }
    });
    
    // عرض نقاط القوة
    if (strengths.length > 0) {
        strengths.forEach(strength => {
            const li = document.createElement('li');
            li.textContent = `${strength.domain}: ${strength.text}`;
            strengthsList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'لا توجد نقاط قوة واضحة في الوقت الحالي. يجب التركيز على تحسين جميع المجالات.';
        li.style.borderRight = '4px solid #ef4444';
        strengthsList.appendChild(li);
    }
    
    // عرض نقاط الضعف
    if (Object.keys(weaknesses).length > 0) {
        Object.keys(weaknesses).forEach(domain => {
            const domainDiv = document.createElement('div');
            domainDiv.className = 'weakness-domain';
            
            const title = document.createElement('h4');
            title.textContent = domain;
            domainDiv.appendChild(title);
            
            const itemsDiv = document.createElement('div');
            itemsDiv.className = 'weakness-items';
            
            weaknesses[domain].forEach(weakness => {
                const tag = document.createElement('span');
                tag.className = 'weakness-tag';
                tag.textContent = weakness.text.substring(0, 50) + '...';
                tag.title = weakness.text;
                itemsDiv.appendChild(tag);
            });
            
            domainDiv.appendChild(itemsDiv);
            weaknessesContent.appendChild(domainDiv);
        });
    } else {
        const p = document.createElement('p');
        p.textContent = 'ممتاز! لا توجد فجوات حرجة. المدرسة تحقق مستوى متقدم في جميع المجالات.';
        p.style.textAlign = 'center';
        p.style.fontSize = '1.125rem';
        p.style.color = '#059669';
        p.style.fontWeight = '600';
        weaknessesContent.appendChild(p);
    }
}

// عرض خارطة الطريق
function displayRoadmap(domainResults) {
    const container = document.getElementById('roadmapContent');
    
    container.innerHTML = `
        <div class="roadmap-intro">
            <p>بناءً على تجربة مدارس الواحة الناجحة، نقدم لكم خارطة طريق شاملة تستند إلى معايير هيئة تقويم التعليم والتدريب. تتضمن المجالات الأربعة الرئيسية مع المؤشرات الحرجة والنسب المطلوبة والشواهد اللازمة لتحقيق التميز المدرسي.</p>
        </div>

        <!-- المرحلة الأولى -->
        <div class="roadmap-phase">
            <div class="phase-header phase-1">
                <h3 class="phase-title">المرحلة الأولى: البداية السريعة</h3>
                <p class="phase-duration">30 يوماً لتحقيق نتائج سريعة وبناء الزخم (Quick Wins)</p>
            </div>
            <div class="phase-content">
                <div class="phase-pillars">
                    <div class="pillar">
                        <div class="pillar-icon">⚡</div>
                        <h4>الإجراءات الفورية</h4>
                        <p>تنفيذ خطوات عملية سريعة ومباشرة يمكن تطبيقها فوراً دون الحاجة لموارد كبيرة</p>
                    </div>
                    <div class="pillar">
                        <div class="pillar-icon">🎯</div>
                        <h4>الأولويات العاجلة</h4>
                        <p>التركيز على الأهم والأكثر تأثيراً من خلال تحديد المجالات ذات الأولوية</p>
                    </div>
                    <div class="pillar">
                        <div class="pillar-icon">🚀</div>
                        <h4>بناء الزخم</h4>
                        <p>خلق حالة من الحماس والدافعية لدى المعلمين والطلاب وأولياء الأمور</p>
                    </div>
                    <div class="pillar">
                        <div class="pillar-icon">⭐</div>
                        <h4>النتائج السريعة</h4>
                        <p>تحقيق إنجازات ملموسة في وقت قصير يمكن قياسها ومشاهدتها من قبل الجميع</p>
                    </div>
                </div>

                <div class="phase-steps">
                    <h4 class="steps-title">الإجراءات الفورية - الأسبوع الأول</h4>
                    <div class="steps-grid">
                        <div class="step-item">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h5>تشكيل فريق التميز المدرسي</h5>
                                <p>اختيار 5-7 أعضاء من مختلف التخصصات، تحديد أدوار ومسؤوليات واضحة، وعقد اجتماع تأسيسي لتوضيح الرؤية والأهداف</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h5>نشر ثقافة التقويم والتميز</h5>
                                <p>عقد لقاء تعريفي شامل لجميع المعلمين، توضيح معايير التميز وشرح الفوائد المتوقعة، وبناء التزام جماعي</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h5>التقويم الذاتي السريع</h5>
                                <p>استخدام أداة التشخيص السريعة، جمع البيانات من مصادر متعددة، وحساب النسب المبدئية لكل مجال ومؤشر</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h5>تحديد الفجوات الحرجة</h5>
                                <p>تحليل نتائج التقويم الذاتي، تحديد المؤشرات التي حصلت على أقل من 70%، وترتيبها حسب الأولوية والتأثير</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="phase-steps">
                    <h4 class="steps-title">الأولويات العاجلة - الأسابيع 2-4</h4>
                    <div class="steps-grid">
                        <div class="step-item">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h5>بناء نظام التوثيق الفعال</h5>
                                <p>إنشاء نظام حفظ إلكتروني منظم، تصميم نماذج موحدة للتوثيق، وتدريب المعلمين على طرق التوثيق الصحيحة</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h5>البدء في معالجة الفجوات الحرجة</h5>
                                <p>وضع خطة عمل تفصيلية لكل فجوة، تحديد الإجراءات التصحيحية المطلوبة، والبدء في التنفيذ الفوري</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h5>التطوير المهني السريع</h5>
                                <p>تحديد الاحتياجات التدريبية، تنظيم ورش عمل مكثفة ومركزة، والتعلم من تجارب المدارس المتميزة</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h5>إطلاق مبادرات سريعة التأثير</h5>
                                <p>اختيار 3-5 مبادرات ذات نتائج سريعة، تنفيذها بسرعة، والاحتفاء بالإنجازات الأولية لبناء الحماس</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="quick-wins">
                    <h4 class="quick-wins-title">النتائج السريعة (Quick Wins)</h4>
                    <p class="quick-wins-subtitle">ما يمكن تحقيقه في 30 يوماً - أمثلة واقعية وقابلة للتطبيق</p>
                    <div class="wins-grid">
                        <div class="win-item">
                            <h5>1. رفع نسبة الانضباط المدرسي</h5>
                            <p><strong>الإجراءات:</strong> تطبيق نظام متابعة يومي، تفعيل برنامج تحفيزي للطلاب، تواصل فوري مع أولياء الأمور</p>
                            <p><strong>النتيجة:</strong> رفع نسبة الحضور من 85% إلى 95%</p>
                        </div>
                        <div class="win-item">
                            <h5>2. تحسين البيئة المدرسية</h5>
                            <p><strong>الإجراءات:</strong> حملة تجميل شاملة للفصول والممرات، تنظيم المرافق والمساحات، إنشاء لوحات تحفيزية</p>
                            <p><strong>النتيجة:</strong> بيئة مدرسية جاذبة ومحفزة للتعلم</p>
                        </div>
                        <div class="win-item">
                            <h5>3. تفعيل الشراكة مع الأسرة</h5>
                            <p><strong>الإجراءات:</strong> إطلاق قناة تواصل فعالة، عقد لقاءات دورية، إشراك أولياء الأمور في الأنشطة</p>
                            <p><strong>النتيجة:</strong> رفع نسبة التفاعل من 40% إلى 70%</p>
                        </div>
                        <div class="win-item">
                            <h5>4. توثيق الممارسات الجيدة</h5>
                            <p><strong>الإجراءات:</strong> تدريب المعلمين على التوثيق، جمع الشواهد من الممارسات اليومية، تصنيفها حسب المجالات</p>
                            <p><strong>النتيجة:</strong> جمع 50-100 شاهد موثق بشكل احترافي</p>
                        </div>
                    </div>
                    <div class="phase-conclusion">
                        <p>النتائج السريعة تبني الثقة والزخم، وتُثبت أن التميز ممكن وقابل للتحقيق!</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- المرحلة الثانية -->
        <div class="roadmap-phase">
            <div class="phase-header phase-2">
                <h3 class="phase-title">المرحلة الثانية: الأولويات الحرجة</h3>
                <p class="phase-duration">60 يوماً للتركيز على المؤشرات الحاسمة للتميز</p>
            </div>
            <div class="phase-content">
                <div class="critical-priorities">
                    <div class="priority-item">
                        <div class="priority-header">
                            <h4>1. رفع نواتج التعلم إلى 75% كحد أدنى</h4>
                        </div>
                        <p class="priority-description">التركيز على تحسين التحصيل الدراسي للطلاب وضمان إتقانهم للمهارات الأساسية من خلال برامج علاجية مكثفة وقياس مستمر للتقدم</p>
                        <div class="priority-actions">
                            <div class="action-item">
                                <strong>1. تحليل نتائج الطلاب بدقة:</strong> تحديد الطلاب الضعفاء في كل مادة، تحليل الأسباب الجذرية للتدني، ووضع خطط علاجية فردية
                            </div>
                            <div class="action-item">
                                <strong>2. برامج علاجية مكثفة ومستهدفة:</strong> حصص تقوية إضافية، مجموعات دعم صغيرة (5-7 طلاب)، واستخدام تقنيات تعليمية متنوعة
                            </div>
                            <div class="action-item">
                                <strong>3. تطوير المهارات الأساسية:</strong> التركيز على القراءة والكتابة والحساب، برامج تنمية مهارات التفكير، وتعزيز مهارات القرن الـ21
                            </div>
                            <div class="action-item">
                                <strong>4. قياس التقدم المستمر:</strong> تقويم دوري كل أسبوعين، تتبع تحسن كل طالب، وتعديل الاستراتيجيات حسب النتائج
                            </div>
                        </div>
                    </div>

                    <div class="priority-item">
                        <div class="priority-header">
                            <h4>2. تحسين عمليات التعليم والتعلم إلى 90% كحد أدنى</h4>
                        </div>
                        <p class="priority-description">تطوير الممارسات التدريسية وتفعيل التعلم النشط من خلال تنويع استراتيجيات التدريس وتقديم تغذية راجعة فورية</p>
                    </div>

                    <div class="priority-item">
                        <div class="priority-header">
                            <h4>3. تطوير الإدارة المدرسية إلى 90% كحد أدنى</h4>
                        </div>
                        <p class="priority-description">تحسين التخطيط والقيادة والمناخ المدرسي والشراكة المجتمعية لخلق بيئة حاضنة لجميع الممارسات المتميزة</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- المرحلة الثالثة -->
        <div class="roadmap-phase">
            <div class="phase-header phase-3">
                <h3 class="phase-title">المرحلة الثالثة: البناء المستمر</h3>
                <p class="phase-duration">الاستدامة والتحسين المستمر - رحلة لا تنتهي</p>
            </div>
            <div class="phase-content">
                <div class="sustainability-grid">
                    <div class="sustainability-item">
                        <div class="sustainability-icon">🎯</div>
                        <h4>1. ترسيخ ثقافة التميز</h4>
                        <p>جعل التميز قيمة أساسية يؤمن بها ويمارسها الجميع، وبناء هوية مدرسية قائمة على التميز والجودة</p>
                    </div>
                    <div class="sustainability-item">
                        <div class="sustainability-icon">🛡️</div>
                        <h4>2. الحفاظ على المكتسبات</h4>
                        <p>ضمان استمرارية التحسينات المحققة ومنع التراجع من خلال أنظمة متابعة وتقويم دورية</p>
                    </div>
                    <div class="sustainability-item">
                        <div class="sustainability-icon">🔄</div>
                        <h4>3. التطوير المستمر</h4>
                        <p>تطبيق دورة التحسين المستمر (PDCA) والبحث الدائم عن فرص التحسين والابتكار</p>
                    </div>
                    <div class="sustainability-item">
                        <div class="sustainability-icon">📋</div>
                        <h4>4. الاستعداد للتقويم الخارجي</h4>
                        <p>الحفاظ على جاهزية دائمة من خلال التوثيق المستمر والتقويمات الذاتية الدورية</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- عوامل النجاح -->
        <div class="success-factors">
            <h3 class="factors-title">عوامل النجاح الحاسمة</h3>
            <p class="factors-subtitle">مفاتيح تحقيق التميز المستدام</p>
            <div class="factors-grid">
                <div class="factor-item">
                    <div class="factor-icon">👨‍💼</div>
                    <h4>1. القيادة الملتزمة</h4>
                    <p>قائد متحمس وملتزم بالتميز، قدوة في الممارسات، ودعم مستمر لفريق العمل</p>
                </div>
                <div class="factor-item">
                    <div class="factor-icon">🤝</div>
                    <h4>2. العمل الجماعي</h4>
                    <p>فريق متكامل ومتناغم، توزيع واضح للأدوار، وتواصل فعال مستمر</p>
                </div>
                <div class="factor-item">
                    <div class="factor-icon">📋</div>
                    <h4>3. التوثيق الدقيق</h4>
                    <p>نظام توثيق منظم وفعال، شواهد موثوقة وحديثة، وتحديث مستمر</p>
                </div>
                <div class="factor-item">
                    <div class="factor-icon">📊</div>
                    <h4>4. المتابعة المستمرة</h4>
                    <p>نظام متابعة دوري، مؤشرات أداء واضحة، وتصحيح فوري للمسار</p>
                </div>
                <div class="factor-item">
                    <div class="factor-icon">💪</div>
                    <h4>5. الصبر والمثابرة</h4>
                    <p>التميز رحلة وليس محطة، الاستمرارية رغم التحديات، والتعلم من الأخطاء</p>
                </div>
            </div>
        </div>
    `;
}

// حفظ الإجابة عند تغيير الاختيار
document.querySelectorAll('input[name="answer"]').forEach(radio => {
    radio.addEventListener('change', saveAnswer);
});

// تعيين التاريخ الافتراضي لليوم الحالي
document.getElementById('assessmentDate').valueAsDate = new Date();
