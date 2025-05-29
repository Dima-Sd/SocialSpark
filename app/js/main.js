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

if ($('.faq__button').length) {
    $(function () {
        $('.faq__description').hide();
        $('.faq__button').click(function () {
            let $parent = $(this).closest('.faq__item');
            let $content = $parent.find('.faq__content');
            let $description = $parent.find('.faq__description');

            $('.faq__button').not(this).removeClass('active');
            $('.faq__description').not($description).slideUp();

            $(this).toggleClass('active');
            $($description ).toggleClass('active');
            $description.slideToggle();
        });
    });
}

