"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customShadows = void 0;
// custom shadow processor
const customShadows = (data) => {
    let shadow = {};
    // mapping shadow
    Object.entries(data).map(([key, value]) => {
        shadow = Object.assign(Object.assign({}, shadow), { [`shadow-${key}`]: value });
    });
    return shadow;
};
exports.customShadows = customShadows;
//# sourceMappingURL=shadows.js.map