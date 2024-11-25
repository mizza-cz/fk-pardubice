const menuMobileHeight = 80;
const menuDesktopHeight = 112;

const xxlBreakpoint = 1304 + 32;
const xlBreakpoint = 1280 + 32;
const lgBreakpoint = 1100 + 32;
const mdBreakpoint = 768 + 32;
const smBreakpoint = 640 + 32;
const xsBreakpoint = 440 + 32;

module.exports = {
    mode: 'jit', // Just-In-Time Compiler
    content: ['./src/**/*.html'],
    darkMode: 'media',
    safelist: ['dialog', 'dialog-content', 'spinner', 'tns-nav'],
    theme: {
        // Breakpoints and continers
        screens: {
            xs: `${xsBreakpoint}px`,
            sm: `${smBreakpoint}px`,
            md: `${mdBreakpoint}px`,
            lg: `${lgBreakpoint}px`,
            xl: `${xlBreakpoint}px`,
            '2xl': `${xxlBreakpoint}px`,
        },
        container: {
            padding: '1rem',
        },
        // Typography
        fontFamily: {
            sans: ['DINPro', 'sans-serif'],
        },
        // Custom
        extend: {
            // Max width breakpoints
            screens: {
                '-2xl': { max: `${xxlBreakpoint - 1}px` },
                '-xl': { max: `${xlBreakpoint - 1}px` },
                '-lg': { max: `${lgBreakpoint - 1}px` },
                '-md': { max: `${mdBreakpoint - 1}px` },
                '-sm': { max: `${smBreakpoint - 1}px` },
                '-xs': { max: `${xsBreakpoint - 1}px` },
            },
            // Colors
            colors: {
                primary: {
                    light: 'HSL(0, 100%, 66%)',
                    DEFAULT: 'HSL(0, 100%, 46%)',
                    dark: 'HSL(0, 100%, 26%)',
                },
                secondary: {
                    light: 'HSL(227, 51%, 50%)',
                    DEFAULT: 'HSL(227, 51%, 30%)',
                    dark: 'HSL(227, 51%, 20%)',
                },
                gray: {
                    DEFAULT: 'HSL(225, 24%, 93%)',
                },
            },
            // Sizes
            minHeight: {
                mobile: `${menuMobileHeight}px`,
                desktop: `${menuDesktopHeight}px`,
            },
            height: {
                calcMobileContent: `calc(100vh - ${`${menuMobileHeight}px`})`,
                calcDesktopContent: `calc(100vh - ${`${menuDesktopHeight}px`})`,
            },
            spacing: {
                mobile: `${menuMobileHeight}px`,
                desktop: `${menuDesktopHeight}px`,
                mobilePadding: `${menuMobileHeight}px`,
                desktopPadding: `${menuDesktopHeight}px`,
                72: '72px',
            },
            // Typography
            lineHeight: {
                normal: 'normal',
                15: '15px',
                21: '21px',
                22: '22px',
                26: '26px',
                25: '25px',
                40: '40px',
                48: '48px',
                50: '50px',
            },
            fontSize: {
                32: '2rem',
                40: '2.5rem',
            },
            // Aspect ratio
            aspectRatio: {
                '4/3': '4 / 3',
                '3/2': '3 / 2',
            },
            // Shadows
            boxShadow: {
                custom: '0px 0px 30px rgba(234,236,242, .75)',
                bottomSection: '0px 0px 100px rgba(234,236,242, 1)',
                
            },
            // Grid
            gridTemplateColumns: {
                articles: '295px 1fr',
                archive: '224px 1fr',
                heroMatches: 'minmax(55px, 1fr) auto minmax(55px, 1fr)',
                relatedArticles: '112px 1fr',
            },
            // Background
            backgroundImage: {
                mainPattern: 'url(/dist/img/topstory-bg.webp)',
            },
        },
    },
};
