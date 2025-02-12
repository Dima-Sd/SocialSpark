document.addEventListener("DOMContentLoaded", function () {
    (() => {
        const langToggle = document.querySelector("[data-lang-toggle]");
        const langList = document.querySelector("[data-lang-list]");

        langToggle.addEventListener("click", () => {
            const expanded =
                langToggle.getAttribute("aria-expanded") === "true" || false;

            langToggle.classList.toggle("is-open");
            langToggle.setAttribute("aria-expanded", !expanded);

            langList.classList.toggle("is-open");
        });
    })();

});
const buttonSwitcher = document.querySelector('[data-theme-switcher]')

buttonSwitcher.addEventListener('click', function () {
    this.classList.toggle('theme-light')
})

const langSwitcher = document.querySelector('.current')
const langList = document.querySelector('.switcher-lang__link--uk')
langSwitcher.addEventListener('click', function () {
    langList.classList.toggle('active')
});

const accordionButtons = document.querySelectorAll('[data-open-accordion]');

accordionButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        accordionButtons.forEach(btn => {
            if (btn !== item) {
                btn.classList.remove("active");
            }
        });

        this.classList.toggle("active");
    });
});