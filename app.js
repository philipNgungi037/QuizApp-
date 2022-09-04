let rightAns,
rightNumber = 0,
falseNumber = 0;

document.addEventListener('DOMContentLoaded', function () {
    AddQuestion();

    eventListeners();
});

eventListeners = () => {
    document.querySelector('#check').addEventListener('click', validateAnswer);

}