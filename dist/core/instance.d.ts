export declare class Instance {
    private _predefined;
    private _obj;
    private _bgOpacity;
    private _borderOpacity;
    private _textOpacity;
    constructor(themeStyle?: object);
    updateObject(data: object | undefined): void;
    /**
     * Get pre defined styles from osmicsx
     * @param data
     */
    predefinedStyles(data: string): void;
    /**
     * Check if the ["min-w", "w", "max-w", "min-h", "h", "max-h"]
     * are responsive or not
     * @param data
     */
    responsiveSize(data: string): void;
    /**
     * Auto generate fixed width size
     * @param data
     */
    fixedWidthSize(data: string): void;
    /**
     * Auto generate fixed height size
     * @param data
     */
    fixedHeightSize(data: string): void;
    /**
     * Check if the size style are using percentage or not.
     * @param data
     */
    percentSize(data: string): void;
    /**
     * Auto generate translate X or Y position
     * @param syntax styles syntax
     */
    transformTranslate(syntax: string): void;
    /**
     * Auto generate scale X,Y or Both position
     * @param syntax styles syntax
     */
    transformScale(syntax: string): void;
    /**
     * Auto generate rotate X,Y or Both position
     * @param syntax styles syntax
     */
    transformRotate(syntax: string): void;
    /**
     * Auto generate translate X or Y position
     * @param syntax styles syntax
     */
    transformSkew(syntax: string): void;
    /**
     * Checking if there's a color opacity
     * @param syntax
     */
    colorOpacity(syntax: string): void;
    /**
     * Checking if it's using dark mode or not
     * @param syntax
     */
    darkTheme(syntax: string, mode: string): void;
    /**
     * Checking if it's only android platform
     * @param syntax
     */
    android(syntax: string): void;
    /**
     * Checking if it's only ios platform
     * @param syntax
     */
    ios(syntax: string): void;
    /**
     * Checking if it's notch or not
     * @param syntax
     */
    notch(syntax: string): void;
    get predefined(): any;
    /**
     * Get final style data
     * @returns {*|{}}
     */
    getOutputStyle(): object;
}
