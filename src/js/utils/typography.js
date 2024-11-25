const tables = document.querySelectorAll('.typography table');
const images = document.querySelectorAll('.typography img');
const iframes = document.querySelectorAll('.typography iframe');
export const typography = () => {
    // wrap tables
    if (tables.length) {
        tables.forEach((table) => {
            const wrapper = document.createElement('div');
            wrapper.style.overflowX = 'auto';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });
    }

    // add lazyloading on images
    if (images.length) {
        images.forEach((image) => {
            image.loading = 'lazy';
        });
    }

    // add lazyloading on iframes
    if (iframes.length) {
        iframes.forEach((iframe) => {
            iframe.loading = 'lazy';
        });
    }
};
