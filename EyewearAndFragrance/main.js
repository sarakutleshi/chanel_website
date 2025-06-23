document.addEventListener("DOMContentLoaded", function () {
    var allButtons = document.querySelectorAll('[class^="button"]');

    allButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Added to CART!");
        });
    });
});
