const toggler = document.querySelector('.menu-toggler');
const wrapper = document.querySelector('.menu-wrapper');
const header = document.querySelector('header');
const body = document.querySelector('body');
const links = document.querySelectorAll('.menu-link');
const submenuLinks = document.querySelectorAll('.submenu-link');

const cssClass = {
    show: 'show',
    menuShown: 'menu-shown',
};

/**
 * Shows menu
 */
const show = () => {
    wrapper.classList.add(cssClass.show);
    toggler.setAttribute('aria-expanded', true);
    header.classList.add(cssClass.menuShown);
    body.classList.add(cssClass.menuShown);
};

/**
 * Hides menu
 */
const hide = () => {
    wrapper.classList.remove(cssClass.show);
    toggler.setAttribute('aria-expanded', false);
    header.classList.remove(cssClass.menuShown);
    body.classList.remove(cssClass.menuShown);
    hideAllSubmenus();
    hideAllSecondarySubmenus();
};

/**
 * Handles click on menu toggler
 */
const handleClickOnToggler = () => {
    // menu is hidden, show it
    if (toggler.getAttribute('aria-expanded') === 'false') {
        show();
        return;
    }
    // hide menu
    hide();
};

/**
 * Hides shown menu when click outside
 * @param {Event} e
 */
const handleOutsideClick = (e) => {
    if (!toggler.contains(e.target) && !wrapper.contains(e.target)) hide();
};

/**
 * Hides shown submenu
 * @param {Element} link
 * @param {Element} submenu
 */
const hideSubmenu = (link, submenu) => {
    if (link && submenu) {
        // set link as opened
        link.setAttribute('aria-expanded', false);
        // open submenu
        submenu.classList.remove(cssClass.show);
    }
};

/**
 * Shows submenu
 * @param {Element} link
 * @param {Element} submenu
 */
const showSubmenu = (link, submenu) => {
    if (link && submenu) {
        // set link as opened
        link.setAttribute('aria-expanded', true);
        // open submenu
        submenu.classList.add(cssClass.show);
    }
};

const hideAllSubmenus = () => {
    const submenus = document.querySelectorAll(`.menu-item > .submenu.${cssClass.show}`);
    const links = document.querySelectorAll('.menu-link[aria-expanded="true"]');
    for (let i = 0; i < links.length; i++) {
        hideSubmenu(links[i], submenus[i]);
    }
};

const hideAllSecondarySubmenus = () => {
    const submenus = document.querySelectorAll(`.submenu-item > .submenu.${cssClass.show}`);
    const links = document.querySelectorAll('.submenu-link[aria-expanded="true"]');
    for (let i = 0; i < links.length; i++) {
        hideSubmenu(links[i], submenus[i]);
    }
};

/**
 * Handles click on menu-link
 * @param {Event} e
 */
const handleLinkClick = (e) => {
    // get a link
    const link = e.currentTarget;
    // has the link submenu?
    const submenu = link.nextElementSibling;
    if (submenu) {
        e.preventDefault();
        // hide if it's clicked on shown submenu
        if (link.getAttribute('aria-expanded') === 'true') {
            hideSubmenu(link, submenu);
        } else {
            // hide all shown submenus
            hideAllSubmenus();
            // hide all secondary submenus
            hideAllSecondarySubmenus();
            // show clicked submenu
            showSubmenu(link, submenu);
        }
    }
};

/**
 * Handles click on menu-link
 * @param {Event} e
 */
const handleSubmenuLinkClick = (e) => {
    // get a link
    const link = e.currentTarget;
    // has the link submenu?
    const submenu = link.nextElementSibling;
    if (submenu) {
        e.preventDefault();
        // hide if it's clicked on shown submenu
        if (link.getAttribute('aria-expanded') === 'true') {
            hideSubmenu(link, submenu);
        } else {
            // hide all secondary submenus
            hideAllSecondarySubmenus();
            // show clicked submenu
            showSubmenu(link, submenu);
        }
    }
};

// Event handlers
document.addEventListener('click', (e) => {
    handleOutsideClick(e);
});

toggler.addEventListener('click', handleClickOnToggler);

links.forEach((link) => {
    link.addEventListener('click', handleLinkClick);
});
submenuLinks.forEach((link) => {
    link.addEventListener('click', handleSubmenuLinkClick);
});
