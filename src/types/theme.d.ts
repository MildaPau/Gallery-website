/* eslint-disable @typescript-eslint/indent */
import '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
    interface PaletteOptions {
        green?: PaletteColorOptions;
        neon?: PaletteColorOptions | undefind;
        formColor?: PaletteColorOptions;
    }

    interface Palette {
        green?: PaletteOptions;
        neon?: PaletteOptions | undefind;
        formColor?: PaletteOptions;
    }
}
declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        box: CSSProperties;
    }
    interface Mixins {
        navbar: CSSProperties;
    }
    interface Mixins {
        footer: CSSProperties;
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        green: true,
    }
}
