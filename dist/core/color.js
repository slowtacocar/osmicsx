"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorHelper = void 0;
const darkThemeHelper_1 = require("../lib/darkThemeHelper");
const colorHelper = (syntax) => (themeContext) => {
    var _a, _b, _c, _d;
    const splitSyntax = syntax.split(" ");
    let color = "";
    if (splitSyntax.length === 1) {
        const splitOpacity = splitSyntax[0].split("/");
        const getPredefinedColor = themeContext === null || themeContext === void 0 ? void 0 : themeContext.theme[splitOpacity[0]];
        if (typeof getPredefinedColor === "string") {
            color = getPredefinedColor.replace("--osmi-opacity", splitOpacity[1] !== undefined
                ? (Number(splitOpacity[1]) / 100).toFixed(2)
                : "1");
            return color;
        }
        else {
            throw Error("Invalid color syntax");
        }
    }
    else if (splitSyntax.length === 2 &&
        splitSyntax.some((syntax) => syntax.includes("dark:"))) {
        const findDefaultColor = (_a = splitSyntax.find((syntax) => !syntax.includes("dark:"))) !== null && _a !== void 0 ? _a : "";
        const findDarkColor = (_b = splitSyntax.find((syntax) => syntax.includes("dark:"))) !== null && _b !== void 0 ? _b : "";
        const defaultColor = findDefaultColor === null || findDefaultColor === void 0 ? void 0 : findDefaultColor.split("/");
        const darkColor = (_c = findDarkColor === null || findDarkColor === void 0 ? void 0 : findDarkColor.replace("dark:", "")) === null || _c === void 0 ? void 0 : _c.split("/");
        if ((0, darkThemeHelper_1.isDark)(findDarkColor, (_d = themeContext === null || themeContext === void 0 ? void 0 : themeContext.mode) !== null && _d !== void 0 ? _d : "")) {
            const getPredefinedColor = themeContext === null || themeContext === void 0 ? void 0 : themeContext.theme[darkColor[0]];
            if (typeof getPredefinedColor === "string") {
                color = getPredefinedColor.replace("--osmi-opacity", darkColor[1] !== undefined
                    ? (Number(darkColor[1]) / 100).toFixed(2)
                    : "1");
                return color;
            }
            else {
                throw Error("Invalid color syntax");
            }
        }
        else {
            const getPredefinedColor = themeContext === null || themeContext === void 0 ? void 0 : themeContext.theme[defaultColor[0]];
            if (typeof getPredefinedColor === "string") {
                color = getPredefinedColor.replace("--osmi-opacity", defaultColor[1] !== undefined
                    ? (Number(defaultColor[1]) / 100).toFixed(2)
                    : "1");
                return color;
            }
            else {
                throw Error("Invalid color syntax");
            }
        }
    }
    else {
        throw Error("Invalid color syntax");
    }
};
exports.colorHelper = colorHelper;
//# sourceMappingURL=color.js.map