"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyHelper = void 0;
const instance_1 = require("./instance");
const applyHelper = (...args) => (themeContext) => {
    const outputStyles = [];
    // Get syntax from each args
    for (let i = 0; i < args.length; i++) {
        // Init instance
        const instanceStyle = new instance_1.Instance(themeContext === null || themeContext === void 0 ? void 0 : themeContext.theme);
        // Get syntax list from each args
        const argStyle = args[i];
        const syntaxList = argStyle.split(" ");
        const sortedSyntax = [
            ...syntaxList.filter((item) => !item.includes("dark:") &&
                !item.includes("notch:") &&
                !item.includes("android:") &&
                !item.includes("ios:")),
            ...syntaxList.filter((item) => item.includes("android:")),
            ...syntaxList.filter((item) => item.includes("ios:")),
            ...syntaxList.filter((item) => item.includes("notch:")),
            ...syntaxList.filter((item) => item.includes("dark:")),
        ];
        sortedSyntax.map((syntax) => {
            var _a;
            // Only allow string syntax
            if (typeof syntax !== "string") {
                throw new Error("Invalid styling syntax.");
            }
            // Check for android platform only
            instanceStyle.android(syntax);
            // Check for ios platform only
            instanceStyle.ios(syntax);
            // Check if there's notch or not.
            instanceStyle.notch(syntax);
            if (!syntax.includes("android:") && !syntax.includes("ios:") && !syntax.includes("notch:")) {
                // check if width & size using responsive method or not
                instanceStyle.responsiveSize(syntax);
                // auto generate percentage size
                instanceStyle.percentSize(syntax);
                // auto generate fixed width size
                instanceStyle.fixedWidthSize(syntax);
                // auto generate fixed width size
                instanceStyle.fixedHeightSize(syntax);
                // auto generate transform position
                instanceStyle.transformTranslate(syntax);
                // auto generate transform scale
                instanceStyle.transformScale(syntax);
                // auto generate transform skew
                instanceStyle.transformSkew(syntax);
                // auto generate transform rotate
                instanceStyle.transformRotate(syntax);
                // Check if there's coloring opacity
                instanceStyle.colorOpacity(syntax);
                // Check if there's any dark theme
                instanceStyle.darkTheme(syntax, (_a = themeContext === null || themeContext === void 0 ? void 0 : themeContext.mode) !== null && _a !== void 0 ? _a : "system");
                // Generate from pre-defined styles
                instanceStyle.predefinedStyles(syntax);
            }
        });
        outputStyles.push(instanceStyle.getOutputStyle());
    }
    return outputStyles;
};
exports.applyHelper = applyHelper;
//# sourceMappingURL=apply.js.map