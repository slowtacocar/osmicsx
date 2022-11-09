/// <reference types="react" />
import type { StyleProp, ViewStyle, TextStyle, ImageStyle } from "react-native";
export declare type NamedStyles<T> = {
    [P in keyof T]: ViewStyle | TextStyle | ImageStyle | StyleProp<T>;
};
export declare enum ThemeMode {
    "system" = "system",
    "dark" = "dark",
    "light" = "light"
}
export interface OsmiContextInstance {
    theme: Record<string, object | string>;
    mode: keyof typeof ThemeMode;
    switchMode: (newMode: keyof typeof ThemeMode) => void;
    scaleWidth: (width: number) => number;
    scaleHeight: (height: number) => number;
}
export interface ApplyInstance {
    apply: <T extends NamedStyles<T> | NamedStyles<any>>(...args: string[]) => any;
    colors: (...args: string[]) => string | string[];
    switchTheme: (newMode: keyof typeof ThemeMode) => void;
    scaleWidth: (width: number) => number;
    scaleHeight: (height: number) => number;
}
export interface OsmiProviderProps {
    theme?: CustomThemeType;
    children: JSX.Element;
}
export declare type WidthSize = {
    maxWidth?: number;
    minWidth?: number;
    width?: number;
};
export declare type HeightSize = {
    maxHeight?: number;
    minHeight?: number;
    height?: number;
};
export interface BackgroundDark {
    backgroundColor: string;
}
export interface BorderDark {
    borderColor: string;
}
export interface TextDark {
    color: string;
}
export declare type CustomColors = Record<string, string>;
export declare type CustomSpacing = Record<string | number, number>;
export declare type CustomLineHeight = Record<string | number, number>;
export declare type CustomLetterSpacing = Record<string | number, number>;
export declare type CustomBorder = {
    width?: Record<string | number, number>;
    radius?: Record<string | number, number>;
};
export declare type CustomFonts = {
    family?: Record<string, string>;
    size?: Record<string | number, number>;
};
export declare type Shadow = {
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
};
export declare type CustomShadow = Record<string | number, Shadow>;
export declare type CustomThemeType = {
    colors?: CustomColors;
    spacing?: CustomSpacing;
    border?: CustomBorder;
    font?: CustomFonts;
    lineHeight?: CustomLineHeight;
    letterSpacing?: CustomLetterSpacing;
    shadow?: CustomShadow;
};
