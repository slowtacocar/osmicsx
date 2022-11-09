"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customBorders = void 0;
// custom borders processor
const customBorders = (data) => {
    let borderStyles = {};
    // mapping border size
    if (data === null || data === void 0 ? void 0 : data.width) {
        Object.entries(data.width).map(([key, value]) => {
            borderStyles = Object.assign(Object.assign({}, borderStyles), { [`border-${key}`]: { borderWidth: value }, [`border-t-${key}`]: { borderTopWidth: value }, [`border-r-${key}`]: { borderRightWidth: value }, [`border-b-${key}`]: { borderBottomWidth: value }, [`border-l-${key}`]: { borderLeftWidth: value } });
        });
    }
    // mapping border radius
    if (data === null || data === void 0 ? void 0 : data.radius) {
        Object.entries(data.radius).map(([key, value]) => {
            borderStyles = Object.assign(Object.assign({}, borderStyles), { [`rounded-${key}`]: { borderRadius: value }, [`rounded-t-${key}`]: {
                    borderTopLeftRadius: value,
                    borderTopRightRadius: value,
                }, [`rounded-r-${key}`]: {
                    borderTopRightRadius: value,
                    borderBottomRightRadius: value,
                }, [`rounded-b-${key}`]: {
                    borderBottomRightRadius: value,
                    borderBottomLeftRadius: value,
                }, [`rounded-l-${key}`]: {
                    borderBottomLeftRadius: value,
                    borderTopLeftRadius: value,
                }, [`rounded-tl-${key}`]: { borderTopLeftRadius: value }, [`rounded-tr-${key}`]: { borderTopRightRadius: value }, [`rounded-br-${key}`]: { borderBottomRightRadius: value }, [`rounded-bl-${key}`]: { borderBottomLeftRadius: value } });
        });
    }
    return borderStyles;
};
exports.customBorders = customBorders;
//# sourceMappingURL=borders.js.map