/* eslint-disable @typescript-eslint/indent */
import '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
    interface PaletteOptions {
        green?: PaletteColorOptions;
        warm?: PaletteColorOptions;
        cold?: PaletteColorOptions;
        pastel?: PaletteColorOptions;
        formColor?: PaletteColorOptions;
    }

    interface Palette {
        green?: PaletteOptions;
        warm?: PaletteOptions;
        cold?: PaletteOptions;
        pastel?: PaletteOptions;
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
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        green: true,
        warm: true,
        cold: true,
    }
}
