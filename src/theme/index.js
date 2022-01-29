import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#11a683',
        },
        secondary: {
            light: "rgb(74, 110, 224)",
            main: '#3659b5',
        },
        mono: {
            lighter: "#f0f2fc",
            light: "#9fa6bf",
            main: "#6D758D",
            dark: "#0E101A",
            50: '#f9faff',
            100: "#f0f2fc",
            200: "#e7e9f5",
            300: '#c6cbde',
            400: "#9fa6bf",
            500: "#6D758D",
            900: "#0E101A",
        }
    },
    typography: {
        fontFamily: 'Quicksand,sans-serif',
        h1: {
            fontFamily: 'Quicksand,sans-serif',
            lineHeight: '52px',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '40px'
        },
        h2: {
            fontFamily: 'Quicksand,sans-serif',
            fontSize: '29px',
            lineHeight: '38px',
            fontWeight: 700,
            fontStyle: 'normal'
        },
        h3: {
            fontFamily: 'Quicksand,sans-serif',
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: 700,
            fontStyle: 'normal'
        },
        h5: {
            fontFamily: 'Quicksand,sans-serif',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 700,
            fontStyle: 'normal'
        },
        subtitlelarge: {
            fontFamily: 'Quicksand,sans-serif',
            fontSize: '20px',
            lineHeight: '32px',
            fontWeight: 400
        },
        subtitle1: {
            fontFamily: 'Quicksand,sans-serif',
            fontSize: '18px',
            lineHeight: '32px',
            fontWeight: 400
        },
        subtitle2: {
            fontFamily: 'Quicksand,sans-serif',
            fontSize: '16px',
            lineHeight: '28px',
            fontWeight: 400
        },
        body1: {
            fontFamily: 'Quicksand,sans-serif',
            fontSize: '15px',
            lineHeight: '24px',
            fontWeight: 400
        },
        body2: {
            fontFamily: 'Quicksand,sans-serif',
            fontSize: '14px',
            lineHeight: '18px',
            fontWeight: 400
        },
        caption: {
            fontFamily: 'Quicksand,sans-serif',
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: 400
        },
        button: {
            textTransform: 'unset',
            fontFamily: 'Quicksand,sans-serif',
            fontSize: '14px',
            lineHeight: 1,
            fontWeight: 700,
        },
        overline: {
            fontFamily: 'Quicksand,sans-serif',
            fontSize: '11px',
            lineHeight: '16px',
            letterSpacing: '.04em',
            fontWeight: 400
        },
    },
    spacing: 4,
});


