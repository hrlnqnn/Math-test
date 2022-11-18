let button = document.getElementById("finish");

button.addEventListener("click", checkTest);

function checkTest() {
    let result = 0;

    let answer1 = document.getElementById("question-1").value;
    if (answer1 === "10") {
        result++;
    }

    let answer2 = document.getElementById("question-2").value;
    if (answer2 === "5") {
        result++;
    }

    let answer3 = document.getElementById("question-3").value;
    if (answer3 === "9") {
        result++;
    }

    let answer4 = document.getElementById("question-4").value;
    if (answer4 === "7") {
        result++;
    }

    let answer5 = document.getElementById("question-5").value;
    if (answer5 === "7") {
        result++;
    }

    let answer6 = document.getElementById("question-6").value;
    if (answer6 === "7") {
        result++;
    }

    let answer7 = document.getElementById("question-7").value;
    if (answer7 === "9") {
        result++;
    }

    let answer8 = document.getElementById("question-8").value;
    if (answer8 === "+") {
        result++;
    }

    let answer9 = document.getElementById("question-9").value;
    if (answer9 === "8") {
        result++;
    }

    let answer10 = document.getElementById("question-10").value;
    if (answer10 === "9") {
        result++;
    }

    let answer11 = document.getElementById("question-11").value;
    if (answer11 === "6") {
        result++;
    }

    let answer12 = document.getElementById("question-12").value;
    if (answer12 === "6") {
        result++;
    }

    alert("Кількість вірних відповідей: " + result);
}