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

const switcherTheme = document.querySelector('[data-theme-switcher]')
const body = document.querySelector('.light-theme')

switcherTheme.addEventListener('click', function () {
    this.classList.toggle('light-mode')
    body.classList.toggle('active')
})

const langSwitcher = document.querySelector('.current')
const langList = document.querySelector('.switcher-lang__link--uk')
langSwitcher.addEventListener('click', function () {
    langList.classList.toggle('active')
});

const accordionButtons = document.querySelectorAll('[data-open-accordion]');
const accordionContent = document.querySelectorAll('[data-accordion-content]');
accordionButtons.forEach((item, index) => {
    item.addEventListener('click', function () {
        const isExpanded = item.getAttribute("aria-expanded") === "true";

        accordionButtons.forEach((btn, i) => {
            if (btn !== item) {
                btn.setAttribute("aria-expanded", "false");
                btn.classList.remove("active");
                accordionContent[i].classList.remove("active");
            }
        });

        item.setAttribute("aria-expanded", !isExpanded);
        item.classList.toggle("active");
        accordionContent[index].classList.toggle("active");
    });
});
