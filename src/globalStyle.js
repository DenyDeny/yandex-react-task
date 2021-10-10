import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'YS Text';
        font-weight: 400;
        font-style: normal;
        font-stretch: normal;
        src: url(//yastatic.net/s3/home/fonts/ys/1/text-regular.woff2) format('woff2'), url(//yastatic.net/s3/home/fonts/ys/1/text-regular.woff) format('woff');
    }

    @font-face {
        font-family: 'YS Text';
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        src: url(//yastatic.net/s3/home/fonts/ys/1/text-medium.woff2) format('woff2'), url(//yastatic.net/s3/home/fonts/ys/1/text-medium.woff) format('woff');
    }

    @font-face {
        font-family:' YS Text';
        font-weight: 700;
        font-style: normal;
        font-stretch: normal;
        src: url(//yastatic.net/s3/home/fonts/ys/1/text-bold.woff2) format('woff2'), url(//yastatic.net/s3/home/fonts/ys/1/text-bold.woff) format('woff')
    }

    :root {
        // common colors
        --white: rgb(255, 255, 255);
        --black: rgb(0, 0, 0);
        --blue-grey-500: #7F8285;
        --blue-grey-50: #F0F2F3;
        --gray: #e6e6e6;
        --yellow: #ffcc00;
        --green: #00b341;
        --orange: #ff9a00;
        --red-500: #ff3333;
        --red-600: #e00000;
        // second colors
        --color-text-second: #ccc;
        --secondary: rgba(0, 0, 0, 0.3);
        // font
        --font-family: 'YS Text','Helvetica Neue', Arial, sans-serif;
        // focused
        --yellow-border-color: #b38f00;
        --gray-border-color: #b3b3b3;
        // hovered
        --yellow-hovered: #f2c200;
        --gray-hovered: #dbdbdb;
        // disabled
        --disabled: #F2F2F2;
        // control border color
        --field-border-color: #D9D9D9;
    }

    html,
    .app-container {
        height: 100%;
    }

    body {
        font-family: var(--font-family);
        -webkit-font-feature-settings: 'liga','kern';
        -moz-font-feature-settings: 'liga','kern';
        font-feature-settings: 'liga','kern';
        margin: 0;
        height: 100%;
    }
`
