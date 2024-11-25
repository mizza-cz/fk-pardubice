export const initOnlajnySticker = () => {
    const onlajnySticker = document.querySelector('#onlajny-sticker');

    if (onlajnySticker) {
        if (sessionStorage.getItem('sticker') !== 'closed') onlajnySticker.classList.remove('-translate-x-[110%]');

        document.querySelector('[data-sticker-close]')?.addEventListener('click', () => {
            sessionStorage.setItem('sticker', 'closed');
            onlajnySticker.classList.add('-translate-x-[110%]');
        });
    }
};
