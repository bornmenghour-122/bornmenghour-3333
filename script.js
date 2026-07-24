document.getElementById('student-form').addEventListener('submit', function(event) {

  event.preventDefault();

 
  const math = parseFloat(document.getElementById('score-math').value) || 0;
  const khmer = parseFloat(document.getElementById('score-khmer').value) || 0;
  const history = parseFloat(document.getElementById('score-history').value) || 0;
  const env = parseFloat(document.getElementById('score-env').value) || 0;
  const geo = parseFloat(document.getElementById('score-geo').value) || 0;
  const morals = parseFloat(document.getElementById('score-morals').value) || 0;
  const english = parseFloat(document.getElementById('score-english').value) || 0;


  const totalScore = math + khmer + history + env + geo + morals + english;


  let finalGrade = 'F';

  if (totalScore >= 428) {
    finalGrade = 'A';
  } else if (totalScore >= 380) {
    finalGrade = 'B';
  } else if (totalScore >= 333) {
    finalGrade = 'C';
  } else if (totalScore >= 285) {
    finalGrade = 'D';
  } else if (totalScore >= 237.5) {
    finalGrade = 'E';
  }

  const messageElement = document.getElementById('form-message');
  messageElement.textContent = `Student added successfully! Total Score: ${totalScore}/475 (Grade: ${finalGrade})`;
  
  
  if (finalGrade === 'F') {
    messageElement.style.color = 'red';
  } else {
    messageElement.style.color = 'green';
  }

});