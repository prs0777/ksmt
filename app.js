const quiz = [
  {
    question: '経済学部で偏差値が高い大学はどれ？',
    answers: [ '高崎経済大学', '立正大学', '東洋大学', '東京経済大'],
    correct: '高崎経済大学'
  }, {
    question: '高崎経済大学のサークルの中で部室があるのはどれ？',
    answers: [ 'Redstar', 'Flaps', '旅行研究会', '鍵爪研究会'],
    correct: '旅行研究会'
  
  }, {
    question: '僕の好きな女性は？',
    answers: [ '大久保佳代子', '浜辺美波', 'ゼシカ', '高橋しょうこ'],
    correct: '浜辺美波'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!いいね！');
    score++;
  } else {
    $window.alert('おばか！不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}