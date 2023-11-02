/** @type {import('tailwindcss').Config} */
const content = [
  './src/pages/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
  './src/app/**/*.{js,ts,jsx,tsx}',
];
const theme = {
  spacing: {
    0: '0px',
    4: '4px',
    8: '8px',
    12: '12px',
    16: '16px',
    24: '24px',
    32: '32px',
    40: '40px',
    48: '48px',
    56: '56px',
    64: '64px',
    80: '80px',
    120: '120px',
  },

  screens: {
    'desk-lg': { max: '1920px' },
    'desk-aux': { max: '1600px' },
    'desk-md': { max: '1366px' },
    'desk-sm': { max: '1024px' },
    'tab-md': { max: '880px' },
    'tab-aux': { max: '865px' },
    tab: { max: '800px' },
    'tab-sm': { max: '700px' },
    'tab-xs': { max: '620px' },
    mob: { max: '430px' },
    'mob-sm': { max: '412px' },
  },

  colors: {
    primary: {
      green: '#031E10',
      'green-dark': '#007A18',
      'green-light': '#00B925',
    },
    secondary: {
      cian: '#FFFF00',
      cian2: '#FFDA00',
    },
    tertiary: {
      yellow: '#FFFF00',
      yellow2: '#FFDA00',
    },
    green: '#031E10',
    black: '#4D5156',
    black2: '#181818',
    gray1: '#717171',
    gray2: '#979797',
    gray3: 'rgba(151, 151, 151, 0.47)',
    gray4: '#E1E2E6',
    gray5: '#EBECF4',
    'gray-header': '#F4F1EA',
    white: '#FFFFFF',
    background: '#F3F3F3',
    background1: 'rgba(225, 226, 230, 0.2)',
    background2: '#FBFBFB',
    background3: '#FFFFFF',
    'background-green': '#031E10',
    blur: 'rgba(255, 255, 255, 0.4)',
    red: '#FF381A',
    'gray-ads': 'rgba(0, 0, 0, 0.10)',
  },

  boxShadow: {
    sm: '0px 2px 4px rgba(38, 54, 153, 0.06)',
    normal: '0px 4px 8px rgba(38, 54, 153, 0.06)',
    md: '0px 8px 16px rgba(38, 54, 153, 0.04)',
    lg: '0px 16px 32px rgba(38, 54, 153, 0.04)',
    inset:
      'inset 0px -2px 4px rgba(0, 0, 0, 0.25), inset 0px 3px 4px rgba(255, 255, 255, 0.25)',
    'inset-button': 'inset 0px 1px 4px rgba(0, 0, 0, 0.25)',
    card: '0px 0px 6px rgba(0, 0, 0, 0.15)',
    'card-after': '3px -3px 3px 0 rgba(0, 0, 0, 0.05)',
    'card-after-bottom': '3px 3px 3px 0 rgba(0, 0, 0, 0.05)',
    'icon-button': '0px 4px 4px rgba(30, 61, 142, 0.06)',
    'sm-no-bot': '0px 0px 4px rgba(38, 54, 153, 0.06)',
    carousel: '0px 4px 4px 0px rgba(3, 30, 16, 0.08)',
    'news-card': '0px 4px 4px 0px rgba(0, 15, 115, 0.08)',
  },

  borderRadius: {
    sm: '4px',
    lg: '16px',
    normal: '8px',
    irregular: '8px 0px 8px 8px',
  },

  fontSize: {
    // Header links
    'header-link': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'header-link-mob': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],

    // Error Page
    'error-title-desk-lg': [
      '32px',
      {
        fontWeight: 700,
        lineHeight: '40px',
      },
    ],
    'error-title-desk-md': [
      '24px',
      {
        fontWeight: 700,
        lineHeight: '32px',
      },
    ],
    'error-title-mob': [
      '22px',
      {
        fontWeight: 700,
        lineHeight: '30px',
      },
    ],
    'error-title-mob-sm': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: '28px',
      },
    ],
    'error-text-desk-lg': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: '32px',
      },
    ],
    'error-text-tab': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: '26px',
      },
    ],
    'error-text-mob-sm': [
      '12px',
      {
        fontWeight: 700,
        lineHeight: '18px',
      },
    ],
    'error-button': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: '26px',
      },
    ],

    // Header
    'header-title-desk-lg': [
      '24px',
      {
        fontWeight: 700,
        lineHeight: '32px',
      },
    ],
    'header-title-tab': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: '32px',
      },
    ],
    'header-title-mob': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: '32px',
      },
    ],
    'header-title-mob-sm': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: '32px',
      },
    ],

    // News
    'news-title-desk-lg': [
      '40px',
      {
        fontWeight: 700,
        lineHeight: '56px',
      },
    ],
    'news-title-desk-md': [
      '32px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'news-title-tab': [
      '32px',
      {
        fontWeight: 700,
        lineHeight: '40px',
      },
    ],
    'news-title-mob': [
      '24px',
      {
        fontWeight: 700,
        lineHeight: '32px',
      },
    ],
    'most-read': [
      '24px',
      {
        fontWeight: 700,
        lineHeight: '32px',
      },
    ],
    'most-read-text': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: '24px',
      },
    ],
    'news-h2-subtitle-desk-lg': [
      '36px',
      {
        fontWeight: 700,
        lineHeight: '40px',
      },
    ],
    'news-h2-subtitle-desk-md': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'news-h2-subtitle-tab': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'news-h2-subtitle-mob': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'news-h2-subtitle-mob-sm': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'news-paragraph-desk-lg': [
      '18px',
      {
        fontWeight: 400,
        lineHeight: '30px',
      },
    ],
    'news-paragraph-tab': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: '24px',
      },
    ],
    'news-paragraph-mob': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: '22px',
      },
    ],
    'related-desk-lg': [
      '36px',
      {
        fontWeight: 700,
        lineHeight: '40px',
      },
    ],
    'related-desk-md': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'related-tab': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'related-mob': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'related-mob-sm': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'related-title-desk-lg': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: '32px',
      },
    ],
    'related-title-desk-md': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: '24px',
      },
    ],
    'related-title-mob': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: '22px',
      },
    ],
    'more-news-desk-lg': [
      '24px',
      {
        fontWeight: 700,
        lineHeight: '32px',
      },
    ],
    'more-news-desk-md': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'more-news-tab': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'more-news-mob': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'more-news-mob-sm': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'more-news-title-desk-lg': [
      '24px',
      {
        fontWeight: 400,
        lineHeight: '32px',
      },
    ],
    'more-news-title-desk-md': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: '32px',
      },
    ],
    'more-news-title-mob': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'more-news-title-mob-sm': [
      '12px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'more-news-cat-desk-lg': [
      '20px',
      {
        fontWeight: 400,
        lineHeight: '32px',
      },
    ],
    'more-news-cat-desk-md': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: '32px',
      },
    ],
    'more-news-cat-mob': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'more-news-cat-mob-sm': [
      '12px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'more-news-date-desk-lg': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'more-news-date-desk-md': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'more-news-date-mob': [
      '12px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],

    // Menu
    menu: [
      '20px',
      {
        fontWeight: 400,
        lineHeight: '28px',
      },
    ],

    // Next Content
    'next-title': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'next-title-desk-sm': [
      '14px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'next-title-tab': [
      '12px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'next-text': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'next-text-desk-sm': [
      '12px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'next-text-tab': [
      '10px',
      {
        fontWeight: 400,
        lineHeight: '11px',
      },
    ],

    'next-redic': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],

    // Index
    'index-title': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: '32px',
      },
    ],
    'index-title-desk-sm': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'index-title-tab': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'index-nav': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'index-nav-desk-sm': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: '19px',
      },
    ],
    'index-nav-tab': [
      '12px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'index-nav-mob': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],

    // questions
    question: [
      '20px',
      {
        fontWeight: 400,
        lineHeight: '32px',
      },
    ],
    'question-desk-sm': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: '19px',
      },
    ],
    'question-tab': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'question-mob': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'question-mob-sm': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: '19px',
      },
    ],

    // bread
    bread: [
      '20px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'bread-desk-sm': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'bread-mob': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'bread-mob-sm': [
      '12px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],

    // footer
    'footer-button': [
      '24px',
      {
        fontWeight: 700,
        lineHeight: '18px',
      },
    ],
    'footer-button-desk-sm': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: '24px',
      },
    ],
    'footer-button-mob': [
      '14px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'footer-rs': [
      '32px',
      {
        fontWeight: 400,
        lineHeight: '18px',
      },
    ],
    'footer-rs-desk-sm': [
      '20px',
      {
        fontWeight: 400,
        lineHeight: '24px',
      },
    ],
    'footer-rs-tab': [
      '24px',
      {
        fontWeight: 400,
        lineHeight: '24px',
      },
    ],
    'footer-rs-mob': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'footer-institutional': [
      '18px',
      {
        fontWeight: 400,
        lineHeight: '18px',
      },
    ],
    'footer-copy': [
      '12px',
      {
        fontWeight: 400,
        lineHeight: '18px',
      },
    ],
    'footer-copy-desk-sm': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: '24px',
      },
    ],

    // Aux
    'small-text-2-bold': [
      '12px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'text-3-desk-lg': [
      '20px',
      {
        fontWeight: 400,
        lineHeight: '32px',
      },
    ],
    'text-3-desk-sm': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'text-3-tab': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: '20px',
      },
    ],
    'text-3-mob': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'text-3-mob-sm': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],

    // Glossary
    'glossary-sub': [
      '24px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'glossary-sub-desk-sm': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: '32px',
      },
    ],
    'glossary-sub-tab': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'glossary-sub-mob': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'glossary-sub-mob-sm': [
      '14px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'glossary-title': [
      '32px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'glossary-title-desk-sm': [
      '24px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'glossary-title-tab': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'glossary-title-mob': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'glossary-title-mob-sm': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'glossary-hero-subtitle': [
      '32px',
      {
        fontWeight: 400,
        lineHeight: '40px',
      },
    ],

    // Course Card
    category: [
      '36px',
      {
        fontWeight: 700,
        lineHeight: '40px',
      },
    ],
    'category-desk-sm': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'category-tab': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'category-mob': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'category-mob-sm': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'category-sub': [
      '20px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'category-sub-desk-sm': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: '20px',
      },
    ],
    'category-sub-tab': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'category-sub-mob': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: '20px',
      },
    ],
    'category-sub-mob-sm': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: '30px',
      },
    ],
    'guess-category-desk-lg': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'guess-category-desk-sm': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'guess-category-tab': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'guess-category-mob': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'guess-category-mob-sm': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'course-title': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'course-title-desk-sm': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'course-title-mob': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'course-title-mob-sm': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'course-sub': [
      '20px',
      {
        fontWeight: 400,
        lineHeight: '32px',
      },
    ],
    'course-sub-desk-sm': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: '20px',
      },
    ],
    'course-sub-tab': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'course-sub-mob': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'course-sub-mob-sm': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],

    // How to Bet
    'card-number': [
      '40px',
      {
        fontWeight: 700,
        lineHeight: '40px',
      },
    ],
    'card-number-mob': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: '23.44px',
      },
    ],
    'bubble-title': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'bubble-title-tab': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'bubble-title-mob': [
      '14px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'bubble-title-mob-sm': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'bubble-sub': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'bubble-sub-tab': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'bubble-sub-mob': [
      '12px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],

    // Work Sans - Desktop 1920
    'heading-1-desk-lg': [
      '64px',
      {
        fontWeight: 700,
        lineHeight: '62px',
      },
    ],
    'heading-2-desk-lg': [
      '48px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'heading-3-desk-lg': [
      '36px',
      {
        fontWeight: 700,
        lineHeight: '40px',
      },
    ],

    // Work Sans - Desktop 1024
    'heading-1-desk-sm': [
      '32px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'heading-2-desk-sm': [
      '32px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'heading-3-desk-sm': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],

    // Work Sans - Tablet
    'heading-1-tab': [
      '32px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'heading-2-tab': [
      '24px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'heading-3-tab': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],

    // Work Sans - Mobile 430
    'heading-1-mob': [
      '32px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'heading-2-mob': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'heading-3-mob': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],

    // Work Sans - Mobile 320
    'heading-1-mob-sm': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'heading-2-mob-sm': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'heading-3-mob-sm': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'heading-4-mob-sm': [
      '14px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],

    // Roboto - Desktop 1920
    'heading-desk-lg': [
      '32px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'subtitle-desk-lg': [
      '32px',
      {
        fontWeight: 400,
        lineHeight: '32px',
      },
    ],
    'section-lead-desk-lg': [
      '24px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'text-bold-desk-lg': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: '32px',
      },
    ],
    'text-desk-lg': [
      '20px',
      {
        fontWeight: 400,
        lineHeight: '32px',
      },
    ],
    'text-2-desk-lg': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'small-text-desk-lg': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'small-text-2-desk-lg': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],

    // Roboto - Desktop 1024
    'heading-desk-sm': [
      '24px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'subtitle-desk-sm': [
      '20px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'section-lead-desk-sm': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'text-bold-desk-sm': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'text-desk-sm': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'small-text-desk-sm': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'small-text-2-desk-sm': [
      '12px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'small-text-3-desk-sm': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: '19px',
      },
    ],

    // Roboto - Tablet
    'heading-tab': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'subtitle-tab': [
      '18px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'section-lead-tab': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'text-bold-tab': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: '32px',
      },
    ],
    'text-tab': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: '32px',
      },
    ],
    'small-text-tab': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'small-text-2-tab': [
      '12px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'small-text-3-tab': [
      '10px',
      {
        fontWeight: 400,
        lineHeight: '11px',
      },
    ],

    // Roboto - Mobile 430
    'heading-mob': [
      '20px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'subtitle-mob': [
      '20px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'section-lead-mob': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'text-bold-mob': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'text-mob': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: '32px',
      },
    ],
    'text-2-mob': [
      '14px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'small-text-mob': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'small-text-2-mob': [
      '12px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],

    // Roboto - Mobile 320
    'heading-mob-sm': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'subtitle-mob-sm': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'section-lead-mob-sm': [
      '18px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'text-bold-mob-sm': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'text-mob-sm': [
      '14px',
      {
        fontWeight: 400,
        lineHeight: '30px',
      },
    ],
    'small-text-mob-sm': [
      '12px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'small-text-2-mob-sm': [
      '12px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'small-text-3-mob-sm': [
      '8px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'guesses-subtitle': [
      '16px',
      {
        fontWeight: 400,
        lineHeight: 'normal',
      },
    ],
    'guesses-subtitle-desk-sm': [
      '14px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'guesses-subtitle-mob': [
      '12px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],

    // Buttons
    'button-sm': [
      '14px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
    'button-md': [
      '16px',
      {
        fontWeight: 700,
        lineHeight: 'normal',
      },
    ],
  },

  extend: {
    fontFamily: {
      roboto: 'var(--font-roboto)',
      workSans: 'var(--font-work-sans)',
    },

    keyframes: {
      sliderButton: {
        '0%': {
          transform: 'translateX(0%)',
        },
        '50%': {
          transform: 'translateX(85%)',
        },
        '100%': {
          transform: 'translateX(0%)',
        },
      },

      sliderImage: {
        '0%': {
          transform: 'translate(0)',
        },
        '50%': {
          transform: 'scale(1.05)',
        },
        '100%': {
          transform: 'translate(0)',
        },
      },

      fade: {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },

      'card-fade': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },

      buttonClick: {
        '0%': {
          'background-color': '#06378D',
        },
        '10%': {
          'background-color': '#1079E2',
        },
        '80%': {
          'background-color': '#1079E2',
        },
        '100%': {
          'background-color': '#06378D',
        },
      },

      slide: {
        '0%': {
          transform: 'translateX(-100%)',
        },
        '100%': {
          transform: 'translateX(0%)',
        },
      },

      'range-flash': {
        '0%': {
          'background-color': '#FFFF00',
          color: '#06378D',
        },
        '49%': {
          'background-color': '#FFFF00',
          color: '#06378D',
        },
        '50%': {
          'background-color': '#06378D',
          color: '#FFFF00',
        },
        '100%': {
          'background-color': '#06378D',
          color: '#FFFF00',
        },
      },

      adsSkeleton: {
        '0%': {
          'background-color': 'rgba(0, 0, 0, 0.10)',
        },
        '50%': {
          'background-color': 'rgba(0, 0, 0, 0.02)',
        },
        '100%': {
          'background-color': 'rgba(0, 0, 0, 0.10)',
        },
      },

      carouselImagePosition: {
        '0%': { transform: 'translate(0) scale(1.1)' },
        '50%': { transform: 'translate(3%, 3%) scale(1.1)' },
        '100%': { transform: 'translate(0) scale(1.1)' },
      },
    },

    animation: {
      fade: 'fade 1.5s',
      revealFade: 'fade 0.7s',
      'card-fade': 'card-fade 1s',
      slide: 'slide 40s infinite linear',
      buttonClick: 'buttonClick 2s linear',
      sliderButton: 'sliderButton 12s ease infinite',
      adsSkeleton: 'adsSkeleton 2s ease-in-out infinite',
      sliderImage: 'sliderImage 20s ease-in-out infinite',
      carouselImagePosition: 'carouselImagePosition 20s ease-in-out infinite',
    },
  },
};
// eslint-disable-next-line import/no-extraneous-dependencies, global-require
const plugins = [require('tailwind-scrollbar-hide')];

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content,
  theme,
  plugins,
});
