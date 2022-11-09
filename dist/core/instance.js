"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = void 0;
const react_native_1 = require("react-native");
// responsive module
const responsive_1 = require("../lib/responsive");
// percentage
const percentage_1 = require("../lib/percentage");
// import opacity processing
const opacity_1 = require("../processor/opacity");
// import dark theme checker
const darkThemeHelper_1 = require("../lib/darkThemeHelper");
// Import iPhone X helper
const iphoneXHelper_1 = require("../lib/iphoneXHelper");
class Instance {
    constructor(themeStyle) {
        this._predefined = themeStyle;
        this._obj = {};
        this._bgOpacity = 100;
        this._borderOpacity = 100;
        this._textOpacity = 100;
    }
    updateObject(data) {
        this._obj = Object.assign(Object.assign({}, this._obj), data);
    }
    /**
     * Get pre defined styles from osmicsx
     * @param data
     */
    predefinedStyles(data) {
        this.updateObject(this._predefined[data]);
    }
    /**
     * Check if the ["min-w", "w", "max-w", "min-h", "h", "max-h"]
     * are responsive or not
     * @param data
     */
    responsiveSize(data) {
        if (data.includes("/")) {
            this.updateObject((0, responsive_1.convertResponsive)(data.split("/")));
        }
    }
    /**
     * Auto generate fixed width size
     * @param data
     */
    fixedWidthSize(data) {
        if (/(\bw\b\-[0-9]+)/.test(data)) {
            // Check wether it's max width, min width or width
            const _nextObject = data.includes("max-w-")
                ? {
                    maxWidth: Number(data.replace("max-w-", "")),
                }
                : data.includes("min-w-")
                    ? {
                        minWidth: Number(data.replace("min-w-", "")),
                    }
                    : {
                        width: Number(data.replace("w-", "")),
                    };
            this.updateObject(_nextObject);
        }
    }
    /**
     * Auto generate fixed height size
     * @param data
     */
    fixedHeightSize(data) {
        if (/(\bh\b\-[0-9]+)/.test(data)) {
            // Check wether it's max height, min height or height
            const _nextObject = data.includes("max-h-")
                ? {
                    maxHeight: Number(data.replace("max-h-", "")),
                }
                : data.includes("min-h-")
                    ? {
                        minHeight: Number(data.replace("min-h-", "")),
                    }
                    : {
                        height: Number(data.replace("h-", "")),
                    };
            this.updateObject(_nextObject);
        }
    }
    /**
     * Check if the size style are using percentage or not.
     * @param data
     */
    percentSize(data) {
        if (data.includes("%")) {
            this.updateObject((0, percentage_1.convertPercentage)(data.split("%")));
        }
    }
    /**
     * Auto generate translate X or Y position
     * @param syntax styles syntax
     */
    transformTranslate(syntax) {
        if (/(-translate|translate)-(x|y)-([0-9]{1,3}$)/.test(syntax)) {
            const extractTranslate = syntax.split("-");
            const isNegative = syntax.includes("-translate");
            const lastIndex = extractTranslate.length - 1;
            const value = isNegative
                ? Number(-extractTranslate[lastIndex])
                : Number(extractTranslate[lastIndex]);
            if (extractTranslate.includes("x")) {
                this.updateObject({
                    transform: [{ translateX: value }],
                });
            }
            if (extractTranslate.includes("y")) {
                this.updateObject({
                    transform: [{ translateY: value }],
                });
            }
        }
    }
    /**
     * Auto generate scale X,Y or Both position
     * @param syntax styles syntax
     */
    transformScale(syntax) {
        if (/(-scale|scale)-(x|y)-([0-9]{1,3}$)/.test(syntax) ||
            /(-scale|scale)-([0-9]{1,3}$)/.test(syntax)) {
            const extractScale = syntax.split("-");
            const isNegative = syntax.includes("-scale");
            const lastIndex = extractScale.length - 1;
            const value = isNegative
                ? Number(-extractScale[lastIndex])
                : Number(extractScale[lastIndex]);
            if (extractScale.includes("x")) {
                this.updateObject({
                    transform: [{ scaleX: value }],
                });
            }
            if (extractScale.includes("y")) {
                this.updateObject({
                    transform: [{ scaleY: value }],
                });
            }
            if (!extractScale.includes("x") && !extractScale.includes("y")) {
                this.updateObject({
                    transform: [{ scale: value }],
                });
            }
        }
    }
    /**
     * Auto generate rotate X,Y or Both position
     * @param syntax styles syntax
     */
    transformRotate(syntax) {
        if (/(-rotate|rotate)-(x|y|z)-([0-9]{1,3}$)/.test(syntax) ||
            /(-rotate|rotate)-([0-9]{1,3}$)/.test(syntax)) {
            const extractRotate = syntax.split("-");
            const isNegative = syntax.includes("-rotate");
            const lastIndex = extractRotate.length - 1;
            const value = isNegative
                ? Number(-extractRotate[lastIndex])
                : Number(extractRotate[lastIndex]);
            if (extractRotate.includes("x")) {
                this.updateObject({
                    transform: [{ rotateX: `${value}deg` }],
                });
            }
            if (extractRotate.includes("y")) {
                this.updateObject({
                    transform: [{ rotateY: `${value}deg` }],
                });
            }
            if (extractRotate.includes("z")) {
                this.updateObject({
                    transform: [{ rotateZ: `${value}deg` }],
                });
            }
            if (!extractRotate.includes("x") &&
                !extractRotate.includes("y") &&
                !extractRotate.includes("z")) {
                this.updateObject({
                    transform: [{ rotate: `${value}deg` }],
                });
            }
        }
    }
    /**
     * Auto generate translate X or Y position
     * @param syntax styles syntax
     */
    transformSkew(syntax) {
        if (/(-skew|skew)-(x|y)-([0-9]{1,3}$)/.test(syntax)) {
            const extractSkew = syntax.split("-");
            const isNegative = syntax.includes("-skew");
            const lastIndex = extractSkew.length - 1;
            const value = isNegative
                ? Number(-extractSkew[lastIndex])
                : Number(extractSkew[lastIndex]);
            if (extractSkew.includes("x")) {
                this.updateObject({
                    transform: [{ skewX: `${value}deg` }],
                });
            }
            if (extractSkew.includes("y")) {
                this.updateObject({
                    transform: [{ skewY: `${value}deg` }],
                });
            }
        }
    }
    /**
     * Checking if there's a color opacity
     * @param syntax
     */
    colorOpacity(syntax) {
        if (/(bg|text|border)-opacity-([0-9]{1,3}$)/.test(syntax)) {
            const extractOpacity = syntax.split("-opacity-");
            switch (extractOpacity[0]) {
                case "bg":
                    this._bgOpacity = Number(extractOpacity[1]);
                    break;
                case "border":
                    this._borderOpacity = Number(extractOpacity[1]);
                    break;
                case "text":
                    this._textOpacity = Number(extractOpacity[1]);
                    break;
            }
        }
    }
    /**
     * Checking if it's using dark mode or not
     * @param syntax
     */
    darkTheme(syntax, mode) {
        if ((0, darkThemeHelper_1.isDark)(syntax, mode)) {
            const extractSyntax = syntax.replace("dark:", "");
            this.predefinedStyles(extractSyntax);
        }
    }
    /**
     * Checking if it's only android platform
     * @param syntax
     */
    android(syntax) {
        if (syntax.includes("android:") && react_native_1.Platform.OS === "android") {
            const extractStyle = syntax.replace("android:", "");
            // check if width & size using responsive method or not
            this.responsiveSize(extractStyle);
            // auto generate percentage size
            this.percentSize(extractStyle);
            // auto generate fixed width size
            this.fixedWidthSize(extractStyle);
            // auto generate fixed width size
            this.fixedHeightSize(extractStyle);
            // auto generate transform position
            this.transformTranslate(extractStyle);
            // auto generate transform scale
            this.transformScale(extractStyle);
            // auto generate transform skew
            this.transformSkew(extractStyle);
            // auto generate transform rotate
            this.transformRotate(extractStyle);
            // Check if there's coloring opacity
            this.colorOpacity(extractStyle);
            // Generate from pre-defined styles
            this.predefinedStyles(extractStyle);
        }
    }
    /**
     * Checking if it's only ios platform
     * @param syntax
     */
    ios(syntax) {
        if (syntax.includes("ios:") && react_native_1.Platform.OS === "ios") {
            const extractStyle = syntax.replace("ios:", "");
            // check if width & size using responsive method or not
            this.responsiveSize(extractStyle);
            // auto generate percentage size
            this.percentSize(extractStyle);
            // auto generate fixed width size
            this.fixedWidthSize(extractStyle);
            // auto generate fixed width size
            this.fixedHeightSize(extractStyle);
            // auto generate transform position
            this.transformTranslate(extractStyle);
            // auto generate transform scale
            this.transformScale(extractStyle);
            // auto generate transform skew
            this.transformSkew(extractStyle);
            // auto generate transform rotate
            this.transformRotate(extractStyle);
            // Check if there's coloring opacity
            this.colorOpacity(extractStyle);
            // Generate from pre-defined styles
            this.predefinedStyles(extractStyle);
        }
    }
    /**
     * Checking if it's notch or not
     * @param syntax
     */
    notch(syntax) {
        if (syntax.includes("notch") && (0, iphoneXHelper_1.isIphoneX)()) {
            const extractStyle = syntax.replace("notch:", "");
            // check if width & size using responsive method or not
            this.responsiveSize(extractStyle);
            // auto generate percentage size
            this.percentSize(extractStyle);
            // auto generate fixed width size
            this.fixedWidthSize(extractStyle);
            // auto generate fixed width size
            this.fixedHeightSize(extractStyle);
            // auto generate transform position
            this.transformTranslate(extractStyle);
            // auto generate transform scale
            this.transformScale(extractStyle);
            // auto generate transform skew
            this.transformSkew(extractStyle);
            // auto generate transform rotate
            this.transformRotate(extractStyle);
            // Generate from pre-defined styles
            this.predefinedStyles(extractStyle);
        }
    }
    get predefined() {
        return this._predefined;
    }
    /**
     * Get final style data
     * @returns {*|{}}
     */
    getOutputStyle() {
        return (0, opacity_1.opacityProcessor)(this._obj, this._bgOpacity, this._borderOpacity, this._textOpacity);
    }
}
exports.Instance = Instance;
//# sourceMappingURL=instance.js.map