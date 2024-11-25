import { initCover } from './utils/cover';
import { initOnlajnySticker } from './utils/sticker';
import { typography } from './utils/typography';

// Typography
typography();

// Cover
initCover();

// Sticker
initOnlajnySticker();

// Scroll listener
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 40);
});

// Matches - scroll to current match
const currentMatch = document.querySelector('#current-match');
if (currentMatch) {
    window.scrollTo({ top: currentMatch.getBoundingClientRect().top - (document.querySelector('header').clientHeight + 56) });
}
