"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opacityProcessor = void 0;
// Processor to replace --osmi-opacity with custom opacity if exists
const opacityProcessor = (styles, bgOpacity, borderOpacity, textOpacity) => {
    let processedObject = {};
    Object.entries(styles).map(([key, value]) => {
        switch (key) {
            case "backgroundColor":
                processedObject = Object.assign(Object.assign({}, processedObject), { [key]: value.includes("--osmi-opacity")
                        ? value.replace("--osmi-opacity", Number(bgOpacity) / 100)
                        : value });
                break;
            case "borderColor":
                processedObject = Object.assign(Object.assign({}, processedObject), { [key]: value.includes("--osmi-opacity")
                        ? value.replace("--osmi-opacity", Number(borderOpacity) / 100)
                        : value });
                break;
            case "color":
                processedObject = Object.assign(Object.assign({}, processedObject), { [key]: value.includes("--osmi-opacity")
                        ? value.replace("--osmi-opacity", Number(textOpacity) / 100)
                        : value });
                break;
            default:
                processedObject = Object.assign(Object.assign({}, processedObject), { [key]: value });
                break;
        }
    });
    return processedObject;
};
exports.opacityProcessor = opacityProcessor;
//# sourceMappingURL=opacity.js.map