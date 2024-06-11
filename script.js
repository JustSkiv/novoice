function toggleDetails(element) {
    const details = element.parentElement.nextElementSibling;
    if (details.style.maxHeight && details.style.maxHeight !== '0px') {
        details.style.maxHeight = '0';
        element.textContent = 'подробнее';
        details.classList.remove('show');
    } else {
        details.style.maxHeight = details.scrollHeight + 'px';
        element.textContent = 'скрыть';
        details.classList.add('show');
    }
}
