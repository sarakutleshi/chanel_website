document.addEventListener("DOMContentLoaded", function () {
        var allButtons = document.querySelectorAll('[id^="button"]');

        allButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                alert("Added to CART!");
            });
        });
    });
