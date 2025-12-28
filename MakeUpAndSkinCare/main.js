function scrollCards(direction) {
    const container = document.querySelector('.home-cards');
    const cardWidth = container.querySelector('.card').offsetWidth + 25;
    container.scrollLeft += direction * cardWidth;
}
