import type { NamedStyles, OsmiContextInstance } from "../types/osmi.types";
export declare const applyHelper: <T extends NamedStyles<any> | NamedStyles<T>>(...args: string[]) => (themeContext: OsmiContextInstance | null) => any[];
