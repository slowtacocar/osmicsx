"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OsmiProvider = void 0;
const react_1 = __importStar(require("react"));
const context_1 = require("./context");
const predefined_1 = require("../predefined");
const processor_1 = require("../processor");
// Import Scale Utility
const responsive_1 = require("../lib/responsive");
const OsmiProvider = (props) => {
    const [mode, setMode] = (0, react_1.useState)("system");
    const switchMode = (newMode) => {
        setMode(newMode);
    };
    const theme = (0, react_1.useMemo)(() => {
        return (props === null || props === void 0 ? void 0 : props.theme) !== undefined
            ? Object.assign(Object.assign({}, predefined_1.osmiPredfined), (0, processor_1.customProcessor)(props === null || props === void 0 ? void 0 : props.theme)) : predefined_1.osmiPredfined;
    }, [props.theme]);
    return (react_1.default.createElement(context_1.OsmiContext.Provider, { value: { mode, switchMode, theme, scaleWidth: responsive_1.scaleWidth, scaleHeight: responsive_1.scaleHeight } }, props.children));
};
exports.OsmiProvider = OsmiProvider;
//# sourceMappingURL=provider.js.map