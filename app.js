let rightAns,
rightNumber = 0,
falseNumber = 0;

document.addEventListener('DOMContentLoaded', function () {
    addQuestion();

    eventListeners();
});

eventListeners = () => {
    document.querySelector('#check').addEventListener('click', validateAnswer);

}
addQuestion = () => {
    const url = 'https://opentdb.com/api.php?amount=10&category=25';