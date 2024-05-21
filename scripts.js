AOS.init();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

document.getElementById('language-select').addEventListener('change', function () {
    var selectedLanguage = this.value;
    var currentUrl = window.location.href;
    if (selectedLanguage === 'en') {
        window.location.href = currentUrl.replace('/es', '/en');
    } else if (selectedLanguage === 'es') {
        window.location.href = currentUrl.replace('/en', '/es');
    }
});
