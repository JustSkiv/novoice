function toggleDetails(element) {
    const details = element.parentElement.nextElementSibling;
    const lang = document.documentElement.lang; // Получаем текущий язык страницы
    let moreText, lessText;

    if (lang === 'ru') {
        moreText = 'подробнее';
        lessText = 'скрыть';
    } else {
        moreText = 'more';
        lessText = 'less';
    }

    if (details.style.maxHeight && details.style.maxHeight !== '0px') {
        details.style.maxHeight = '0';
        element.textContent = moreText;
        details.classList.remove('show');
    } else {
        details.style.maxHeight = details.scrollHeight + 'px';
        element.textContent = lessText;
        details.classList.add('show');
    }
}
