window.cookieConsentSettings = {
    current_lang: 'cs',
    autoclear_cookies: true, // default: false
    theme_css: '/dist/css/style.css', // 🚨 replace with a valid path
    page_scripts: true, // default: false
    languages: {
        cs: {
            consent_modal: {
                title: 'Tato webová stránka používá cookies',
                description:
                    'Tyto webové stránky používají k poskytování služeb, personalizaci reklam a analýze návštěvnosti soubory cookies. Některé z nich jsou k fungování stránky nezbytné, ale o některých můžete rozhodnout sami. Více o používání souborů cookies se dozvíte níže. Můžete je povolit všechny, jednotlivě vybrat nebo všechny odmítnout. Více informací získáte kdykoliv na stránce Zásady používání souborů cookies. <button type="button" data-cc="c-settings" class="cc-link">Nastavení cookies</button>',
                primary_btn: {
                    text: 'Přijmout vše',
                    role: 'accept_all', // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Pouze nezbytné',
                    role: 'accept_necessary', // 'settings' or 'accept_necessary'
                },
            },
            settings_modal: {
                title: 'Nastavení cookies',
                save_settings_btn: 'Uložit moje volby',
                accept_all_btn: 'Přijmout vše',
                reject_all_btn: 'Odmítnout vše',
                close_btn_label: 'Zavřít',
                cookie_table_headers: [
                    { col1: 'Název' },
                    { col2: 'Doména' },
                    { col3: 'Platnost do' },
                    { col4: 'Popis' },
                ],
                blocks: [
                    {
                        title: 'Používaní cookies',
                        description:
                            'Tyto webové stránky používají k poskytování služeb, personalizaci reklam a analýze návštěvnosti soubory cookies. Některé z nich jsou k fungování stránky nezbytné, ale o některých můžete rozhodnout sami.',
                    },
                    {
                        title: 'Funkční cookies – vždy povoleno',
                        description:
                            'Tyto soubory cookie jsou nutné pro základní funkce stránky, a jsou proto vždy povolené.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
                        },
                    },

                    {
                        title: 'Statistické cookies',
                        description:
                            'Statistické cookies umožňují majitelům webových stránek sledovat návštěvnost webových stránek. Anonymně sbírají a sdělují informace, které pomáhají k vylepšování obsahu stránek.',
                        toggle: {
                            value: 'analytics', // your cookie category
                            enabled: false,
                            readonly: false,
                        },
                        /*cookie_table: [
								// list of all expected cookies
								{
									col1: '^_ga', // match all cookies starting with "_ga"
									col2: 'google.com',
									col3: '2 years',
									col4: 'description ...',
									is_regex: true,
								},
								{
									col1: '_gid',
									col2: 'google.com',
									col3: '1 day',
									col4: 'description ...',
								},
							],*/
                    },
                    {
                        title: 'Marketingové cookies',
                        description:
                            'Marketingové cookies jsou používány pro sledování návštěvníků na webových stránkách. Záměrem je zobrazit reklamu, která je relevantní a zajímavá pro jednotlivého uživatele a tímto hodnotnější pro vydavatele a inzerenty třetích stran.',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false,
                        },
                    },
                    {
                        title: 'Sociální média',
                        description:
                            'Se souhlasem cookies sociálních médií se můžete připojit k vašim sociálním sítím a prostřednictvím nich sdílet obsah z naší webové stránky. Při vypnutí se nebude zobrazovat obsah ze sociálních sítí (Facebook, Twitter, Youtube a další).',
                        toggle: {
                            value: 'social',
                            enabled: false,
                            readonly: false,
                        },
                    },
                ],
            },
        },
        en: {
            consent_modal: {
                title: 'This website uses cookies',
                description:
                    'This website uses cookies to provide services, personalize ads and analyze traffic. Some of them are necessary for the operation of the site, but you can decide on some yourself. Learn more about the use of cookies below. You can allow them all, select them individually, or reject them all. You can get more information at any time on the Cookie Policy.<button type="button" data-cc="c-settings" class="cc-link">Cookie settings</button>',
                primary_btn: {
                    text: 'Accept everything',
                    role: 'accept_all', // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Accept necessary',
                    role: 'accept_necessary', // 'settings' or 'accept_necessary'
                },
            },
            settings_modal: {
                title: 'Cookie settings',
                save_settings_btn: 'Save my choices',
                accept_all_btn: 'Accept everything',
                reject_all_btn: 'Reject everything',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    { col1: 'Name' },
                    { col2: 'Domain' },
                    { col3: 'Valid to' },
                    { col4: 'Description' },
                ],
                blocks: [
                    {
                        title: 'Use of cookies',
                        description:
                            'This website uses cookies to provide services, personalize ads and analyze traffic. Some of them are necessary for the operation of the site, but you can decide on some yourself.',
                    },
                    {
                        title: 'Functional cookies – always allowed',
                        description:
                            'These cookies are necessary for the basic functions of the site and are therefore always enabled.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
                        },
                    },

                    {
                        title: 'Statistical cookies',
                        description:
                            'Statistical cookies allow website owners to track website traffic. They anonymously collect and communicate information that helps to improve the content of the site.',
                        toggle: {
                            value: 'analytics', // your cookie category
                            enabled: false,
                            readonly: false,
                        },
                        /*cookie_table: [
								// list of all expected cookies
								{
									col1: '^_ga', // match all cookies starting with "_ga"
									col2: 'google.com',
									col3: '2 years',
									col4: 'description ...',
									is_regex: true,
								},
								{
									col1: '_gid',
									col2: 'google.com',
									col3: '1 day',
									col4: 'description ...',
								},
							],*/
                    },
                    {
                        title: 'Marketing cookies',
                        description:
                            'Marketing cookies are used to track visitors to the website. The intent is to show an ad that is relevant and interesting to the individual user and thus more valuable to third-party publishers and advertisers.',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false,
                        },
                    },
                    {
                        title: 'Social media',
                        description:
                            'With the consent of social media cookies, you can connect to your social networks and share content from our website through them. When turned off, content from social networks (Facebook, Twitter, Youtube and others) will not be displayed.',
                        toggle: {
                            value: 'social',
                            enabled: false,
                            readonly: false,
                        },
                    },
                ],
            },
        },
    },
};

window.addEventListener(
    'message',
    function (e) {
        if (e.data === 'cc-settings') {
            document.querySelector('[data-cc="c-settings"]').click();
        }
    },
    false
);

document.querySelectorAll('[data-src][data-cookiecategory="social"][data-placeholder]').forEach(function (el) {
    el.src = '/cookie-consent-frame.html';
});

document.querySelectorAll('[data-cookie-placeholder]').forEach(function (el) {
    el.addEventListener('click', function () {
        if (typeof el.dataset.cookiePlaceholder !== 'undefined') {
            document.querySelector('[data-cc="c-settings"]').click();
        }
    });
});
