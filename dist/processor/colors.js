"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customColors = void 0;
// import lib converter
const hexToRGBA_1 = __importDefault(require("../lib/hexToRGBA"));
// custom colors processor
const customColors = (data) => {
    let colorStyles = {};
    // mapping colors
    Object.entries(data).map(([key, value]) => {
        const fixedColor = value.includes("#") ? (0, hexToRGBA_1.default)(value) : value;
        colorStyles = Object.assign(Object.assign({}, colorStyles), { [key]: fixedColor, [`bg-${key}`]: { backgroundColor: fixedColor }, [`border-${key}`]: { borderColor: fixedColor }, [`text-${key}`]: { color: fixedColor } });
    });
    return colorStyles;
};
exports.customColors = customColors;
//# sourceMappingURL=colors.js.map