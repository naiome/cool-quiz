const corrcetAnswers = ['B', 'C', 'D', 'A', 'C', 'B', 'A', 'C', 'B', 'D'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const button = form.querySelector('.btn');

const inputNames = form.querySelectorAll('input[type=radio]');
console.log(inputNames)
let j = inputNames.length + 1
while (j--) {
    inputNames.forEach((elem) => {
        elem.addEventListener("change", () => {
            button.disabled = false;
        });
    });
}

form.addEventListener('submit', e => {

    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value]; // get the value of checked

    userAnswers.forEach((answer, index) => {
        if (answer === corrcetAnswers[index]) {
            score += 10;
        }
    });

    scrollTo(0, 0);

    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});

let i = 0;
const timer = setInterval(() => {
    i++;
    if (i === 5) {
        clearInterval(timer);
    }
}, 1000);







