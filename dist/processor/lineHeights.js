"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customLineHeights = void 0;
// custom line height processor
const customLineHeights = (data) => {
    let lineHeights = {};
    // mapping line height
    Object.entries(data).map(([key, value]) => {
        lineHeights = Object.assign(Object.assign({}, lineHeights), { [`leading-${key}`]: { lineHeight: value } });
    });
    return lineHeights;
};
exports.customLineHeights = customLineHeights;
//# sourceMappingURL=lineHeights.js.map