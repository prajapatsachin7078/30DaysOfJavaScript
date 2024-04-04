function submitQuiz() {
    let score = 0;
    
    let correctAnswers = ["c", "a", "c", "b", "b", "c"];
    
    for (let i = 0; i < correctAnswers.length; i++) {
        let answer = document.querySelector(`input[name="q${i + 1}"]:checked`);

        if (answer && answer.value === correctAnswers[i]) {
            score++;
        }
    }
    
    document.getElementById("result").innerText = `You got ${score} out of 6 correct`;
    
    //prevent the page reloads on form submission
    return false;
}
