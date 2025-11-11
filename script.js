// بيانات الأسئلة - 40 سؤالاً
const questions = [
  // المجال الأول: الإدارة المدرسية (10 أسئلة)
  { id: 1, domain: "الإدارة (القيادة) المدرسية", domainId: 1, text: "تضع المدرسة خطة تشغيلية مكتملة العناصر، وفق أهداف تطويرية محددة، وتتابع تنفيذها وتطورها.", indicator: "التخطيط الاستراتيجي" },
  { id: 2, domain: "الإدارة (القيادة) المدرسية", domainId: 1, text: "تعزز المدرسة القيم الإسلامية والهوية الوطنية.", indicator: "القيم والهوية" },
  { id: 3, domain: "الإدارة (القيادة) المدرسية", domainId: 1, text: "تلتزم المدرسة بقيم مهنة التعليم وأخلاقياتها.", indicator: "الأخلاقيات المهنية" },
  { id: 4, domain: "الإدارة (القيادة) المدرسية", domainId: 1, text: "توفر المدرسة مناخاً آمناً للتعلم والنمو نفسياً واجتماعياً.", indicator: "المناخ المدرسي" },
  { id: 5, domain: "الإدارة (القيادة) المدرسية", domainId: 1, text: "تنشر المدرسة قواعد السلوك والمواظبة، وتتابع تطبيقها.", indicator: "الانضباط المدرسي" },
  { id: 6, domain: "الإدارة (القيادة) المدرسية", domainId: 1, text: "توفر المدرسة برامج وأنشطة تربوية داعمة للسلوك الإيجابي وإثرائية لتطوير مواهب المتعلمين.", indicator: "البرامج الإثرائية" },
  { id: 7, domain: "الإدارة (القيادة) المدرسية", domainId: 1, text: "تعزز المدرسة بناء العلاقات الإيجابية والتعاون في المجتمع المدرسي.", indicator: "العلاقات المجتمعية" },
  { id: 8, domain: "الإدارة (القيادة) المدرسية", domainId: 1, text: "تعزز المدرسة مشاركة الأسرة والشراكة المجتمعية لدعم التعلم.", indicator: "الشراكة الأسرية والمجتمعية" },
  { id: 9, domain: "الإدارة (القيادة) المدرسية", domainId: 1, text: "تدعم المدرسة التطوير المهني لمنسوبيها وفقاً لنتائج تقويم الأداء الوظيفي.", indicator: "التطوير المهني" },
  { id: 10, domain: "الإدارة (القيادة) المدرسية", domainId: 1, text: "تطبق المدرسة التقويم الذاتي وتنفذ خطة للتحسين بناء على نتائجه.", indicator: "التقويم والتحسين المستمر" },
  
  // المجال الثاني: التعليم والتعلم (12 سؤالاً)
  { id: 11, domain: "التعليم والتعلم", domainId: 2, text: "توفر المدرسة فرصاً متكافئة للتعلم، تلبي احتياجات المتعلمين ومنهم ذوو الإعاقة والموهوبون.", indicator: "تكافؤ الفرص" },
  { id: 12, domain: "التعليم والتعلم", domainId: 2, text: "تدعم المدرسة تنفيذ المناهج لتحقيق نواتج التعلم المستهدفة وفق الخطة الدراسية.", indicator: "تنفيذ المناهج" },
  { id: 13, domain: "التعليم والتعلم", domainId: 2, text: "تنوع المدرسة في إستراتيجيات التدريس لتلبية احتياجات المتعلمين.", indicator: "استراتيجيات التدريس" },
  { id: 14, domain: "التعليم والتعلم", domainId: 2, text: "تفعل المدرسة التعلم الإلكتروني لتلبية احتياجات المتعلمين ودعم تعلمهم.", indicator: "التعلم الإلكتروني" },
  { id: 15, domain: "التعليم والتعلم", domainId: 2, text: "توفر المدرسة أنشطة تعلم تطبيقية ترتبط بحياة المتعلمين.", indicator: "التعلم التطبيقي" },
  { id: 16, domain: "التعليم والتعلم", domainId: 2, text: "تنمي المدرسة المهارات القرائية والعددية الأساسية لدى المتعلمين.", indicator: "المهارات الأساسية" },
  { id: 17, domain: "التعليم والتعلم", domainId: 2, text: "تنمي المدرسة مهارات التفكير العليا لدى المتعلمين.", indicator: "مهارات التفكير" },
  { id: 18, domain: "التعليم والتعلم", domainId: 2, text: "تنمي المدرسة المهارات العاطفية والاجتماعية والرقمية لدى المتعلمين.", indicator: "المهارات الحياتية" },
  { id: 19, domain: "التعليم والتعلم", domainId: 2, text: "تعزز المدرسة دافعية المتعلمين للتعلم والاستمتاع به.", indicator: "الدافعية للتعلم" },
  { id: 20, domain: "التعليم والتعلم", domainId: 2, text: "تقوم المدرسة أداء المتعلمين باستخدام أساليب وأدوات تقويم متنوعة وفاعلة.", indicator: "أساليب التقويم" },
  { id: 21, domain: "التعليم والتعلم", domainId: 2, text: "تحلل المدرسة نتائج التقويم وتوظفها في تحسين نواتج التعلم بانتظام.", indicator: "توظيف نتائج التقويم" },
  { id: 22, domain: "التعليم والتعلم", domainId: 2, text: "تقدم المدرسة التغذية الراجعة للمتعلمين بانتظام.", indicator: "التغذية الراجعة" },
  
  // المجال الثالث: نواتج التعلم (12 سؤالاً)
  { id: 23, domain: "نواتج التعلم", domainId: 3, text: "يُحقق المتعلمون نتائج متقدمة في مجالات القراءة والرياضيات والعلوم وفقاً للاختبارات الوطنية.", indicator: "النتائج في الاختبارات الوطنية" },
  { id: 24, domain: "نواتج التعلم", domainId: 3, text: "يحقق المتعلمون تقدماً في مجالات القراءة والرياضيات والعلوم، قياساً على مستوى أداء المدرسة السابق.", indicator: "التقدم في التحصيل" },
  { id: 25, domain: "نواتج التعلم", domainId: 3, text: "يظهر المتعلمون الاعتزاز بالقيم والهوية الوطنية.", indicator: "القيم والهوية" },
  { id: 26, domain: "نواتج التعلم", domainId: 3, text: "يظهر المتعلمون اتجاهات إيجابية نحو ذواتهم.", indicator: "الاتجاهات الإيجابية" },
  { id: 27, domain: "نواتج التعلم", domainId: 3, text: "يظهر المتعلمون التزاماً بالممارسات الصحية السليمة.", indicator: "الممارسات الصحية" },
  { id: 28, domain: "نواتج التعلم", domainId: 3, text: "يشارك المتعلمون في الأنشطة المجتمعية والأعمال التطوعية.", indicator: "المشاركة المجتمعية" },
  { id: 29, domain: "نواتج التعلم", domainId: 3, text: "يلتزم المتعلمون بقواعد السلوك والانضباط المدرسي.", indicator: "الانضباط السلوكي" },
  { id: 30, domain: "نواتج التعلم", domainId: 3, text: "يظهر المتعلمون القدرة على البحث والتعلم الذاتي.", indicator: "التعلم الذاتي" },
  { id: 31, domain: "نواتج التعلم", domainId: 3, text: "يظهر المتعلمون اعتزازاً بثقافتهم، واحتراماً للتنوع الثقافي في المجتمع.", indicator: "التنوع الثقافي" },
  { id: 32, domain: "نواتج التعلم", domainId: 3, text: "يُظهر المتعلمون مهارات التواصل والتعاون الفعّال.", indicator: "مهارات التواصل" },
  { id: 33, domain: "نواتج التعلم", domainId: 3, text: "يُظهر المتعلمون مهارات التفكير الناقد وحل المشكلات.", indicator: "التفكير الناقد" },
  { id: 34, domain: "نواتج التعلم", domainId: 3, text: "يُظهر المتعلمون القدرة على استخدام التقنية بفاعلية.", indicator: "استخدام التقنية" },
  
  // المجال الرابع: البيئة المدرسية (6 أسئلة)
  { id: 35, domain: "البيئة المدرسية", domainId: 4, text: "تنظيم مبنى المدرسة ملائم لعدد المتعلمين والمرحلة العمرية.", indicator: "ملاءمة المبنى" },
  { id: 36, domain: "البيئة المدرسية", domainId: 4, text: "تتوافر فصول ومعامل ملائمة للعملية التعليمية تلبي احتياجات المتعلمين ومنهم ذوو الإعاقة.", indicator: "الفصول والمعامل" },
  { id: 37, domain: "البيئة المدرسية", domainId: 4, text: "تلبي المرافق والخدمات المساندة احتياجات المتعلمين، ومنهم ذوو الإعاقة.", indicator: "المرافق المساندة" },
  { id: 38, domain: "البيئة المدرسية", domainId: 4, text: "تتوافر في فصول المدرسة ومعاملها وجميع مرافقها متطلبات الأمن والسلامة.", indicator: "الأمن والسلامة" },
  { id: 39, domain: "البيئة المدرسية", domainId: 4, text: "تعمل المدرسة على صيانة جميع مرافق المبنى وتجهيزاته بانتظام.", indicator: "الصيانة" },
  { id: 40, domain: "البيئة المدرسية", domainId: 4, text: "تعمل المدرسة على نظافة المبنى المدرسي وجميع مرافقه بانتظام.", indicator: "النظافة" }
];

const domainWeights = { 1: 0.25, 2: 0.30, 3: 0.30, 4: 0.15 };
let currentQuestion = 0;
let answers = {};

function displayQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question-container').innerHTML = `
    <div class="question-header">
      <span class="domain-badge">${q.domain}</span>
      <span class="question-number">سؤال ${currentQuestion + 1} من ${questions.length}</span>
    </div>
    <h2 class="question-text">${q.text}</h2>
    <div class="options">
      <label class="option"><input type="radio" name="answer" value="4" ${answers[q.id] === 4 ? 'checked' : ''}><span>(4) متحققة بدرجة كبيرة</span></label>
      <label class="option"><input type="radio" name="answer" value="3" ${answers[q.id] === 3 ? 'checked' : ''}><span>(3) متحققة بدرجة متوسطة</span></label>
      <label class="option"><input type="radio" name="answer" value="2" ${answers[q.id] === 2 ? 'checked' : ''}><span>(2) متحققة بدرجة قليلة</span></label>
      <label class="option"><input type="radio" name="answer" value="1" ${answers[q.id] === 1 ? 'checked' : ''}><span>(1) غير متحققة</span></label>
    </div>
  `;
  updateProgress();
  updateNavigation();
}

function updateProgress() {
  const answered = Object.keys(answers).length;
  const progress = (answered / questions.length) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
  document.getElementById('progress-text').textContent = `تم الإجابة على ${answered} من ${questions.length} سؤالاً`;
}

function updateNavigation() {
  document.getElementById('prev-btn').disabled = currentQuestion === 0;
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');
  if (currentQuestion === questions.length - 1) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-block';
  } else {
    nextBtn.style.display = 'inline-block';
    submitBtn.style.display = 'none';
  }
}

function saveAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (selected) answers[questions[currentQuestion].id] = parseInt(selected.value);
}

function previousQuestion() {
  saveAnswer();
  if (currentQuestion > 0) { currentQuestion--; displayQuestion(); }
}

function nextQuestion() {
  saveAnswer();
  if (currentQuestion < questions.length - 1) { currentQuestion++; displayQuestion(); }
}

function calculateResults() {
  const domainScores = {};
  questions.forEach(q => {
    if (!domainScores[q.domainId]) domainScores[q.domainId] = { total: 0, max: 0 };
    domainScores[q.domainId].total += (answers[q.id] || 0);
    domainScores[q.domainId].max += 4;
  });
  
  const domainPercentages = {};
  for (let id in domainScores) {
    domainPercentages[id] = (domainScores[id].total / domainScores[id].max) * 100;
  }
  
  let finalScore = 0;
  for (let id in domainPercentages) {
    finalScore += domainPercentages[id] * domainWeights[id];
  }
  
  let level, levelClass, levelIcon;
  if (finalScore >= 90) { level = 'تميز'; levelClass = 'level-excellent'; levelIcon = '🌟'; }
  else if (finalScore >= 75) { level = 'متقدم'; levelClass = 'level-advanced'; levelIcon = '🎯'; }
  else if (finalScore >= 50) { level = 'منطلق'; levelClass = 'level-progressing'; levelIcon = '🚀'; }
  else { level = 'تهيئة'; levelClass = 'level-developing'; levelIcon = '⚠️'; }
  
  const urgentIndicators = [];
  questions.forEach(q => {
    const score = answers[q.id] || 0;
    if (score <= 2) {
      urgentIndicators.push({ domain: q.domain, indicator: q.indicator, text: q.text, score });
    }
  });
  
  return { domainScores, domainPercentages, finalScore, level, levelClass, levelIcon, urgentIndicators };
}

function displayResults() {
  const results = calculateResults();
  document.getElementById('assessment-container').style.display = 'none';
  document.getElementById('results-container').style.display = 'block';
  
  document.getElementById('final-score').innerHTML = `
    <div class="score-circle ${results.levelClass}">
      <div class="score-value">${results.finalScore.toFixed(1)}%</div>
      <div class="score-level">${results.levelIcon} ${results.level}</div>
    </div>
  `;
  
  const domainNames = { 1: 'الإدارة (القيادة) المدرسية', 2: 'التعليم والتعلم', 3: 'نواتج التعلم', 4: 'البيئة المدرسية' };
  let domainHTML = '';
  for (let id in results.domainPercentages) {
    const pct = results.domainPercentages[id];
    let dLevel, dClass;
    if (pct >= 90) { dLevel = 'تميز 🌟'; dClass = 'level-excellent'; }
    else if (pct >= 75) { dLevel = 'متقدم 🎯'; dClass = 'level-advanced'; }
    else if (pct >= 50) { dLevel = 'منطلق 🚀'; dClass = 'level-progressing'; }
    else { dLevel = 'تهيئة ⚠️'; dClass = 'level-developing'; }
    
    domainHTML += `
      <div class="domain-result">
        <div class="domain-info">
          <h3>${domainNames[id]}</h3>
          <p class="domain-score">${results.domainScores[id].total} من ${results.domainScores[id].max}</p>
        </div>
        <div class="domain-percentage ${dClass}">${pct.toFixed(1)}%<span class="domain-level">${dLevel}</span></div>
      </div>
    `;
  }
  document.getElementById('domain-results').innerHTML = domainHTML;
  
  if (results.urgentIndicators.length > 0) {
    let urgentHTML = '<ul class="urgent-list">';
    results.urgentIndicators.forEach(item => {
      const scoreText = item.score === 1 ? 'غير متحققة' : 'متحققة بدرجة قليلة';
      urgentHTML += `
        <li class="urgent-item">
          <div class="urgent-header"><strong>${item.indicator}</strong><span class="urgent-badge">${scoreText}</span></div>
          <div class="urgent-domain">${item.domain}</div>
          <div class="urgent-text">${item.text}</div>
        </li>
      `;
    });
    urgentHTML += '</ul>';
    document.getElementById('urgent-indicators').innerHTML = urgentHTML;
  } else {
    document.getElementById('urgent-indicators').innerHTML = '<p class="no-urgent">✅ ممتاز! لا توجد مؤشرات تحتاج تدخل عاجل.</p>';
  }
}

function submitAssessment() {
  saveAnswer();
  if (Object.keys(answers).length < questions.length) {
    alert('يرجى الإجابة على جميع الأسئلة قبل الإرسال.');
    return;
  }
  displayResults();
}

function printResults() { window.print(); }

function restartAssessment() {
  currentQuestion = 0;
  answers = {};
  document.getElementById('results-container').style.display = 'none';
  document.getElementById('assessment-container').style.display = 'block';
  displayQuestion();
}

document.addEventListener('DOMContentLoaded', function() {
  displayQuestion();
  document.getElementById('prev-btn').addEventListener('click', previousQuestion);
  document.getElementById('next-btn').addEventListener('click', nextQuestion);
  document.getElementById('submit-btn').addEventListener('click', submitAssessment);
  document.getElementById('print-btn').addEventListener('click', printResults);
  document.getElementById('restart-btn').addEventListener('click', restartAssessment);
});
