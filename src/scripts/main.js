document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function(params) {
        const currentPosition = window.scrollY;

        if (currentPosition < heroHeight) {
            hidesHeaderElements();
        } else {
            showsHeaderElements();
        }
    })
             

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(openButton) {
            const targetTab = openButton.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${targetTab}]`);
            hideAllTabs();
            aba.classList.add('shows__list--is-active');
            removeActiveButton();
            openButton.target.classList.add('shows__tabs__button--is-active');

        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAnswer);
    }
})

function hidesHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showsHeaderElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function openOrCloseAnswer(element) {
    const classe = 'faq__questions__item--is-open';
    const elementFather = element.target.parentNode;

    elementFather.classList.toggle(classe);
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}