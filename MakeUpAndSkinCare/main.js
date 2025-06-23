document.addEventListener("DOMContentLoaded", function () {
  const allButtons = document.querySelectorAll('[class^="add-to-cart"]');

  allButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Added to CART!");
    });
  });
});
