/**
 * Detect osmi style and Convert it into Width / Heihgt / Font Size as percentage
 * @param {array} array from split string "%" with type and value
 * @return {object} object style width / height / font size
 */
export declare const convertPercentage: ([type, value]: string[]) => object | undefined;
