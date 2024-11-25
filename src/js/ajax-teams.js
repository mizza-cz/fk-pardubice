const teamsNavigation = document.querySelector('.teams-navigation');
const teamButtons = teamsNavigation.querySelectorAll('button[data-source]');
const teamsContentWrapper = document.querySelector('#teams-content-wrapper');

// Format date
const formatDate = (dateString, format = 'dddd DD. mmmm' | 'dd. mm. yyyy') => {
    if (!dateString) return '';
    const date = new Date(dateString);

    if (format === 'dd. mm. yyyy') {
        return `${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`;
    } else if (format === 'dddd DD. mmmm') {
        const dayOfWeek = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'][date.getDay()];
        const day = date.getDate();
        const month = ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'][
            date.getMonth()
        ];
        return `${dayOfWeek} ${day}. ${month}`;
    }
    return '';
};

// Update menu content
const updateMenu = (menu) => {
    let menuHTML = '';
    if (menu.length) {
        menuHTML += '<ul class="grid grid-cols-1 gap-2 bg-gray px-8 py-4">';
        menu.forEach((item) => {
            menuHTML += `
            <li>
            <a href="${item.url}" class="flex items-center gap-4 font-bold uppercase leading-5 text-secondary hover:underline">
            <svg width="1" height="5" class="fill-secondary"><use xlink:href="#divider" class="block"></use></svg>
            ${item.name}
            </a>
            </li>
            `;
        });
        menuHTML += '</ul>';
    }
    teamsContentWrapper.querySelector('#team-menu').innerHTML = menuHTML;
};

// Update articles content
const updateArticles = (articles) => {
    let articlesHTML = '';
    if (!articles.list.length) {
        articlesHTML = '<li class="text-center px-8 py-8 bg-gray">Nebyly nalezeny žádné články.</li>';
    } else {
        articles.list.forEach((article, i) => {
            articlesHTML += `
                <li class="group relative">
                    <article aria-labelledby="sub-article-${i}" class="grid grid-cols-1 gap-2 sm:grid-cols-articles sm:gap-8">
                        <div class="relative aspect-video overflow-hidden">
                            <img
                                srcset="${article.thumbnail.small} 295w, ${article.thumbnail.large} 440w"
                                sizes="(min-width: 672px) 295px, 100vw"
                                src="${article.thumbnail.default}"
                                class="w-full object-cover object-center"
                                loading="lazy"
                                width="295"
                                height="166"
                                alt=""
                            />
                            <time
                                class="absolute right-4 bottom-2 rounded-[20px_3px_20px_3px] bg-secondary px-4 py-2 text-sm font-bold leading-4 text-white group-hover:bg-primary"
                                datetime="${article.date}"
                            >
                            ${formatDate(article.date, 'dd. mm. yyyy')}
                            </time>
                        </div>
                        <div class="flex flex-col">
                            <b class="mb-1 text-xs uppercase leading-15 text-secondary">${article.category}</b>
                            <h2
                                id="sub-article-${i}"
                                class="mb-2 text-xl font-bold leading-26 text-primary group-hover:underline"
                            >
                                ${article.title}
                            </h2>
                            <p class="overflow-ellipsis font-light leading-6" style="--text-lines: 3">${article.perex}</p>
                        </div>
                    </article>
                    <a href="${article.url}" class="z-40 after:absolute after:inset-0"></a>
                </li>
            `;
        });
        articlesHTML += `
            <li class="flex justify-end">
                <a href="${articles.archive}" class="btn btn-secondary w-full py-4 sm:w-auto sm:py-2">
                    <svg width="14" height="13">
                        <use xlink:href="#button-hamburger"></use>
                    </svg>
                    Další články
                </a>
            </li>
        `;
    }
    teamsContentWrapper.querySelector('#team-articles').innerHTML = articlesHTML;
};

// Update matches content
const updateMatches = (matches) => {
    if (matches.played && !matches.future) return;
    const { played, future } = matches;
    let matchesHTML = '';

    if (!played && !future) {
        matchesHTML = '<p class="text-center px-8 py-8 bg-gray mt-4">Nebyly nalezeny žádné aktuální zápasy.</p>';
    } else {
        if (played) {
            matchesHTML += `
            <div class="py-10 px-4 xs:px-8">
                <div class="text-center">
                    <time class="font-bold leading-22" datetime="${played.date}">${formatDate(played.date, 'dddd DD. mmmm')}</time>
                    <div class="text-sm font-light leading-normal">${played.round}, ${played.league}</div>
                </div>
                <div class="grid grid-cols-heroMatches items-center justify-between gap-4">
                    <div class="flex justify-start">
                        <div class="flex flex-col items-center justify-center gap-2">
                            <img
                                src="${played.homeTeam.logo}"
                                width="64"
                                height="64"
                                class="aspect-square object-contain"
                                loading="lazy"
                                alt="Team logo"
                            />
                            <b class="hidden text-center leading-5 sm:block">${played.homeTeam.name}</b>
                            <b class="block text-center leading-5 sm:hidden">${played.homeTeam.shortcut}</b>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <a href="${played.url}" class="group flex justify-center gap-[1px]" title="Přejít na detail zápasu">
                            <span
                                class="grid h-12 w-12 content-center rounded-[20px_3px_3px_3px] bg-secondary text-center text-2xl font-bold leading-8 text-white transition-colors duration-150 ease-linear group-hover:bg-secondary-dark"
                            >
                                ${played.score.home}
                            </span>
                            <span
                                class="grid h-12 w-12 content-center rounded-[3px_3px_20px_3px] bg-secondary text-center text-2xl font-bold leading-8 text-white transition-colors duration-150 ease-linear group-hover:bg-secondary-dark"
                            >
                                ${played.score.visitor}
                            </span>
                        </a>
                    </div>
                    <div class="flex justify-end">
                        <div class="flex flex-col items-center justify-center gap-2">
                            <img
                                src="${played.visitorTeam.logo}"
                                width="64"
                                height="64"
                                class="aspect-square object-contain"
                                loading="lazy"
                                alt="Team logo"
                            />
                            <b class="hidden text-center leading-5 sm:block">${played.visitorTeam.name}</b>
                            <b class="block text-center leading-5 sm:hidden">${played.visitorTeam.shortcut}</b>
                        </div>
                    </div>
                </div>
            </div>
        `;
        }

        if (future) {
            matchesHTML += `
            <div class="${played ? 'border-t border-t-secondary' : ''} py-10 px-4 xs:px-8">
                <div class="text-center">
                    <time class="font-bold leading-22" datetime="${future.date}">${formatDate(future.date, 'dddd DD. mmmm')}</time>
                    <div class="text-sm font-light leading-normal">${future.round}, ${future.league}</div>
                    ${
                        future.stadium
                            ? `<div class="mt-1 flex items-center justify-center gap-2 text-xs font-light">
                                    <svg width="10" height="12">
                                        <use xlink:href="#location"></use>
                                    </svg>
                                    ${future.stadium}
                                </div>`
                            : ''
                    }
                </div>
                <div class="grid grid-cols-heroMatches items-center justify-between gap-4">
                    <div class="flex justify-start">
                        <div class="flex flex-col items-center justify-center gap-2">
                            <img
                                src="${future.homeTeam.logo}"
                                width="64"
                                height="64"
                                class="aspect-square object-contain"
                                loading="lazy"
                                alt="Team logo"
                            />
                            <b class="hidden text-center leading-5 sm:block">${future.homeTeam.name}</b>
                            <b class="block text-center leading-5 sm:hidden">${future.homeTeam.shortcut}</b>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <time
                            class="rounded-[20px_3px_20px_3px] bg-secondary px-6 py-3 text-center text-xl font-bold leading-25 text-white"
                            datetime="${future.time}"
                        >
                            ${future.time}
                        </time>
                    </div>
                    <div class="flex justify-end">
                        <div class="flex flex-col items-center justify-center gap-2">
                            <img
                                src="${future.visitorTeam.logo}"
                                width="64"
                                height="64"
                                class="aspect-square object-contain"
                                loading="lazy"
                                alt="Team logo"
                            />
                            <b class="hidden text-center leading-5 sm:block">${future.visitorTeam.name}</b>
                            <b class="block text-center leading-5 sm:hidden">${future.visitorTeam.shortcut}</b>
                        </div>
                    </div>
                </div>
            </div>
        `;
        }
    }
    teamsContentWrapper.querySelector('#team-matches').innerHTML = matchesHTML;
};

// Fetch data
const fetchData = async (source) => {
    // Spinner
    const spinner = document.createElement('div');
    spinner.classList.add('flex', 'col-span-3', 'items-center', 'justify-center', 'gap-2', 'h-12', 'absolute', 'z-10', 'bg-white', 'inset-0');
    spinner.style.height = '100%';
    spinner.innerHTML = `       
            <span class="spinner"></span>
            Hledám informace o týmu...
        `;
    teamsContentWrapper.prepend(spinner);
    const response = await fetch(source, { method: 'GET' });
    if (response.ok) {
        const data = await response.json();
        if (data) {
            updateMenu(data.menu);
            updateMatches(data.matches);
            updateArticles(data.articles);
            spinner.remove();
        }
    }
};

// Team button click
const handleTeamButtonClick = (e) => {
    if (e.target.getAttribute('aria-current') === 'page') return;

    localStorage.setItem('current-category', e.target.dataset.category);

    const source = e.target.dataset.source;
    if (source) {
        fetchData(source);
        document.querySelector('.teams-navigation [aria-current="page"]').removeAttribute('aria-current');
        e.target.setAttribute('aria-current', 'page');
    }
};

if (teamButtons && teamsContentWrapper) {
    teamButtons.forEach((btn) => {
        btn.addEventListener('click', handleTeamButtonClick);
    });
}

// Update category on page load
const loadCategoryData = (category) => {
    if (category) document.querySelector(`.teams-navigation [data-category="${category}"]`).click();
};
loadCategoryData(localStorage.getItem('current-category'));
