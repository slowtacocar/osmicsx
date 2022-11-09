"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIphoneX = void 0;
/**
 * ptelad/react-native-iphone-x-helper
 *
 * (c) Elad Gil
 */
const react_native_1 = require("react-native");
const isIphoneX = () => {
    const dimen = react_native_1.Dimensions.get("window");
    return (react_native_1.Platform.OS === "ios" &&
        !react_native_1.Platform.isPad &&
        !react_native_1.Platform.isTVOS &&
        (dimen.height === 780 ||
            dimen.width === 780 ||
            dimen.height === 812 ||
            dimen.width === 812 ||
            dimen.height === 844 ||
            dimen.width === 844 ||
            dimen.height === 896 ||
            dimen.width === 896 ||
            dimen.height === 926 ||
            dimen.width === 428));
};
exports.isIphoneX = isIphoneX;
//# sourceMappingURL=iphoneXHelper.js.map