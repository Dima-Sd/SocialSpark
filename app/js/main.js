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
const langList = document.querySelector('.switcher-lang__list')
langSwitcher.addEventListener('click', function () {
    langList.classList.toggle('active')
});