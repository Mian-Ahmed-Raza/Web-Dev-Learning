function toggleAnswer(answerId) {
    const answerBox = document.getElementById(answerId);
    if (answerBox.style.display === 'none' || answerBox.style.display === '') {
        answerBox.style.display = 'block'; // Show the answer
    } else {
        answerBox.style.display = 'none'; // Hide the answer
    }

    
}