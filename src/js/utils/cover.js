export const initCover = () => {
    const coverDialog = document.querySelector('#website-cover');

    if (coverDialog) {
        const storedCoverId = localStorage.getItem('coverId');
        const coverId = coverDialog.getAttribute('data-cover-id');
        const showPermanently = coverDialog.hasAttribute('data-show-permanently');

        if (coverId !== storedCoverId || showPermanently) {
            coverDialog.showModal();
            coverDialog.addEventListener('click', (e) => {
                if (e.target === coverDialog) {
                    coverDialog.remove();
                }
            });
            window.addEventListener('keydown', (e) => {
                if (e.keyCode === 27) {
                    // Esc key pressed
                    coverDialog.remove();
                }
            });
            document.querySelector('[data-cover-close]').addEventListener('click', () => {
                localStorage.setItem('coverId', coverId);
                coverDialog.remove();
            });
        }
    }
};
