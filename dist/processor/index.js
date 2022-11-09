"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProcessor = void 0;
// Color Processor
const colors_1 = require("./colors");
// Spacings Processor
const spacings_1 = require("./spacings");
// Border Processor
const borders_1 = require("./borders");
// Fonts Processor
const fonts_1 = require("./fonts");
// Line Heights Processor
const lineHeights_1 = require("./lineHeights");
// Letter Spacing Processor
const letterSpacings_1 = require("./letterSpacings");
// Shadows Processor
const shadows_1 = require("./shadows");
// Processor to generate Custom Theme into Pre-defined Styles
const customProcessor = (customTheme) => {
    let finalObject = {};
    // mapping colors
    if (customTheme === null || customTheme === void 0 ? void 0 : customTheme.colors) {
        finalObject = Object.assign(Object.assign({}, finalObject), (0, colors_1.customColors)(customTheme === null || customTheme === void 0 ? void 0 : customTheme.colors));
    }
    // mapping spacing
    if (customTheme === null || customTheme === void 0 ? void 0 : customTheme.spacing) {
        finalObject = Object.assign(Object.assign({}, finalObject), (0, spacings_1.customSpacings)(customTheme === null || customTheme === void 0 ? void 0 : customTheme.spacing));
    }
    // mapping borders
    if (customTheme === null || customTheme === void 0 ? void 0 : customTheme.border) {
        finalObject = Object.assign(Object.assign({}, finalObject), (0, borders_1.customBorders)(customTheme === null || customTheme === void 0 ? void 0 : customTheme.border));
    }
    // mapping font family & size
    if (customTheme === null || customTheme === void 0 ? void 0 : customTheme.font) {
        finalObject = Object.assign(Object.assign({}, finalObject), (0, fonts_1.customFonts)(customTheme === null || customTheme === void 0 ? void 0 : customTheme.font));
    }
    // mapping line heights
    if (customTheme === null || customTheme === void 0 ? void 0 : customTheme.lineHeight) {
        finalObject = Object.assign(Object.assign({}, finalObject), (0, lineHeights_1.customLineHeights)(customTheme === null || customTheme === void 0 ? void 0 : customTheme.lineHeight));
    }
    // mapping letter spacing
    if (customTheme === null || customTheme === void 0 ? void 0 : customTheme.letterSpacing) {
        finalObject = Object.assign(Object.assign({}, finalObject), (0, letterSpacings_1.customLetterSpacings)(customTheme === null || customTheme === void 0 ? void 0 : customTheme.letterSpacing));
    }
    // mapping shadow
    if (customTheme === null || customTheme === void 0 ? void 0 : customTheme.shadow) {
        finalObject = Object.assign(Object.assign({}, finalObject), (0, shadows_1.customShadows)(customTheme === null || customTheme === void 0 ? void 0 : customTheme.shadow));
    }
    return finalObject;
};
exports.customProcessor = customProcessor;
//# sourceMappingURL=index.js.map