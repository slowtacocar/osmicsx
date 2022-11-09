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
exports.useStyles = void 0;
const react_1 = __importStar(require("react"));
const context_1 = require("./context");
const apply_1 = require("./apply");
const color_1 = require("./color");
const useStyles = () => {
    const themeContext = react_1.default.useContext(context_1.OsmiContext);
    if (themeContext === null) {
        throw new Error("You must wrap your components in a OsmiProvider.");
    }
    const apply = (0, react_1.useCallback)((...args) => {
        return (0, apply_1.applyHelper)(...args)(themeContext);
    }, [themeContext]);
    const colors = (0, react_1.useCallback)((...args) => {
        if (args.length === 1) {
            return (0, color_1.colorHelper)(args[0])(themeContext);
        }
        else if (args.length === 2) {
            return args.map((syntax) => (0, color_1.colorHelper)(syntax)(themeContext));
        }
        else {
            throw Error("Invalid color syntax");
        }
    }, [themeContext]);
    return {
        apply,
        colors,
        switchTheme: themeContext.switchMode,
        scaleWidth: themeContext.scaleWidth,
        scaleHeight: themeContext.scaleHeight,
    };
};
exports.useStyles = useStyles;
//# sourceMappingURL=hooks.js.map