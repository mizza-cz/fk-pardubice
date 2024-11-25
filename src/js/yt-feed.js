const playVideoButton = document.querySelectorAll('button[data-play-video-id]');

if (playVideoButton) {
    /**
     * Check cookies for video source
     */
    const isSocialCookkie = () => {
        const cc_cookie = document.cookie
            .split('; ')
            .find((item) => item.startsWith('cc_cookie='))
            ?.split('=')[1];
        if (cc_cookie) {
            return JSON.parse(cc_cookie).level?.includes('social') ? true : false;
        }
        return false;
    };

    /**
     * Show video iframe
     * @param {String} videoId
     */
    const showVideo = (videoId) => {
        const src = isSocialCookkie() ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : '/cookie-consent-frame.html';
        const dialog = document.createElement('dialog');
        dialog.innerHTML = `
            <div class="dialog-content">
            <div class="aspect-video">
                <iframe
                    width="100%"
                    height="100%"
                    class="rounded-[20px_3px_20px_3px] overflow-hidden"
                    data-src="https://www.youtube.com/embed/${videoId}?autoplay=1"
                    src="${src}"
                    data-placeholder
                    data-cookiecategory="social"
                    title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
        `;
        document.body.append(dialog);
        dialog.showModal();
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                dialog.remove();
            }
        });
        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
                // Esc key pressed
                dialog.remove();
            }
        });
    };

    /**
     * Button click handler
     * @param {Event} e
     */
    const handleButtonClick = (e) => {
        const videoId = e.currentTarget.getAttribute('data-play-video-id');
        showVideo(videoId);
    };

    // Init play main video
    playVideoButton.forEach((btn) => {
        btn.addEventListener('click', handleButtonClick);
    });
}
