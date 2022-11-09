import React from "react";
import type { ApplyInstance } from "../types/osmi.types";
export declare const withStyles: <P extends ApplyInstance = ApplyInstance>(Component: React.ComponentType<P>) => React.FC<Omit<P, keyof ApplyInstance>>;
