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

    const buttonSwitcher = document.querySelector('[data-switcher]')

    buttonSwitcher.addEventListener('click' , function() {
        this.classList.toggle('on')
    })
});