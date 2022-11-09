"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDark = void 0;
const react_native_1 = require("react-native");
const isDark = (syntax, mode) => {
    if (syntax.includes("dark:") &&
        (mode === "dark" ||
            (mode === "system" && react_native_1.Appearance.getColorScheme() === "dark"))) {
        return true;
    }
    return false;
};
exports.isDark = isDark;
//# sourceMappingURL=darkThemeHelper.js.map