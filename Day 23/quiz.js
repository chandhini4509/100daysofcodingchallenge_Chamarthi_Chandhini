document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz');
    const resultContainer = document.getElementById('result');
  
    let score = 0;
  
    quizContainer.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        const selectedOption = event.target.textContent.trim();
        const correctAnswer = event.target.parentElement.querySelector('[data-correct]').textContent.trim();
  
        if (selectedOption === correctAnswer) {
          score++;
        }
  
       
        const nextQuestion = event.target.closest('.question').nextElementSibling;
        if (nextQuestion) {
          nextQuestion.scrollIntoView({ behavior: 'smooth' });
        } else {
          showResult();
        }
      }
    });
  
    function showResult() {
      resultContainer.innerHTML = `<h2>Your Score: ${score}</h2>`;
    }
  });
  