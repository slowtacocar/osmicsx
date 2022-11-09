"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customLetterSpacings = void 0;
// custom letter spacing processor
const customLetterSpacings = (data) => {
    let letterSpacing = {};
    // mapping letter spacing
    Object.entries(data).map(([key, value]) => {
        letterSpacing = Object.assign(Object.assign({}, letterSpacing), { [`tracking-${key}`]: { letterSpacing: value } });
    });
    return letterSpacing;
};
exports.customLetterSpacings = customLetterSpacings;
//# sourceMappingURL=letterSpacings.js.map