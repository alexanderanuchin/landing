document.addEventListener('DOMContentLoaded', () => {
    const changeThemeButton = document.getElementById('change-theme');
    const h2Element = document.querySelector('#properties h2');
    const visuallyImpairedButton = document.getElementById('visually-impaired');
    const discountDetailsButton = document.getElementById('discount-details');
    const accordeonSection = document.getElementById('accordion');

    // Смена темы
    changeThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        h2Element.classList.toggle('h2color');
    });

    // Для слабовидящих
    visuallyImpairedButton.addEventListener('click', () => {
        document.body.classList.remove('dark-theme');
        h2Element.classList.remove('h2color');
        document.body.classList.toggle('visually-impaired');
    });

    // Показать/ скрыть детали
    discountDetailsButton.addEventListener('click', () => {
        accordeonSection.classList.toggle('accordion-hiden');
        accordeonSection.classList.toggle('accordion-show');
    });
});