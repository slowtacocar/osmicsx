"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFonts = void 0;
// custom fonts processor
const customFonts = (object) => {
    let fontStyles = {};
    // mapping font family
    if (object === null || object === void 0 ? void 0 : object.family) {
        Object.entries(object === null || object === void 0 ? void 0 : object.family).map(([key, value]) => {
            fontStyles = Object.assign(Object.assign({}, fontStyles), { [`font-${key}`]: { fontFamily: value } });
        });
    }
    // mapping font size
    if (object === null || object === void 0 ? void 0 : object.size) {
        Object.entries(object === null || object === void 0 ? void 0 : object.size).map(([key, value]) => {
            fontStyles = Object.assign(Object.assign({}, fontStyles), { [`text-${key}`]: { fontSize: value } });
        });
    }
    return fontStyles;
};
exports.customFonts = customFonts;
//# sourceMappingURL=fonts.js.map