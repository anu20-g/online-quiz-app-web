const questions = [
    { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Tabular Multi Language"], ans: 0 },
    { q: "Which CSS property changes text color?", opts: ["font-color", "color", "text-color"], ans: 1 },
    { q: "Which symbol is used for IDs in CSS?", opts: [".", "@", "#"], ans: 2 }
];
let cur = 0, score = 0;
function loadQ() {
    if (cur >= questions.length) {
        document.querySelector('.quiz-card').innerHTML = `<h2>Quiz Completed!</h2><p>Your Final Score: ${score} / ${questions.length}</p>`;
        return;
    }
    const q = questions[cur];
    document.getElementById('questionText').textContent = `Q${cur+1}: ${q.q}`;
    const opts = document.getElementById('optionsContainer');
    opts.innerHTML = '';
    q.opts.forEach((o, i) => {
        const btn = document.createElement('button');
        btn.textContent = o;
        btn.onclick = () => {
            if (i === q.ans) score++;
            document.getElementById('scoreTracker').textContent = `Score: ${score}`;
            nextQuestion();
        };
        opts.appendChild(btn);
    });
}
function nextQuestion() { cur++; loadQ(); }
loadQ();