import { extendTheme } from 'native-base';

const config = {
    userSystemColorMode: false,
    inititalColorMode: 'light',
}

const colors = {
    primary: {},
    white: '#FAFAFF'
}

const fontConfig = {
    Rubik: {
        300: {
            normal: 'Rubik_300Light',
        },
        400: {
            normal: 'Rubik_400Regular',
        },
        500: {
            normal: 'Rubik_500Medium',
        },
        600: {
            normal: 'Rubik_600SemiBold',
        },
        700: {
            normal: 'Rubik_700Bold',
        }
    }
}

const fonts = {
    body: 'Rubik'
}

export default extendTheme({ config, colors, fontConfig, fonts });