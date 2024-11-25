import { tns } from 'tiny-slider';

const topstory = document.querySelector('.topstory-slider');
if (topstory) {
    const topstorySlider = new tns({
        container: topstory,
        controls: false,
        navPosition: 'bottom',
        loop: true,
        mouseDrag: true,
        autoplay: true,
        autoplayButtonOutput: false,
        slideBy: 1,
    });
}

const matches = document.querySelector('.matches-slider');
if (matches) {
    const start = Array.from(matches.children).indexOf(matches.querySelector('[aria-current="true"]'));
    const matchesSlider = new tns({
        container: matches,
        controls: false,
        nav: false,
        mouseDrag: true,
        loop: false,
        slideBy: 1,
        startIndex: start,
        items: 1,
        responsive: {
            992: {
                items: 2,
                autoWidth: true,
            },
            1312: {
                items: 3,
            },
        },
    });
    setTimeout(() => {
        if (window.innerWidth >= 992) matchesSlider.goTo(start - 1);
    });

    document.querySelectorAll('.matches-slider-prev').forEach((btn) => {
        btn.addEventListener('click', () => matchesSlider.goTo('prev'));
    });
    document.querySelectorAll('.matches-slider-next').forEach((btn) => {
        btn.addEventListener('click', () => matchesSlider.goTo('next'));
    });
}

const bottomPartners = document.querySelector('#bottom-partners-slider');
if (bottomPartners) {
    const bottomPartnersSlider = new tns({
        container: bottomPartners,
        nav: false,
        controls: false,
        mouseDrag: false,
        loop: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        gutter: 40,
        items: 2,
        responsive: {
            672: {
                items: 3,
            },
            800: {
                items: 4,
            },
            1132: {
                items: 5,
            },
            1312: {
                items: 6,
            },
        },
    });
}
