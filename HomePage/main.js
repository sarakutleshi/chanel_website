document.addEventListener("DOMContentLoaded" ,
    function () {
        const quoteElement = document.getElementById("quote");
        quoteElement.addEventListener("click", function () {
            alert("Quote clicked!");
        });
    });