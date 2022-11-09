"use strict";
/**
 * @osmicsx/core
 *
 * (c) Rully Ardiansyah <de.voresyah@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.withStyles = exports.useStyles = exports.OsmiProvider = void 0;
// Import Provider
const provider_1 = require("./core/provider");
Object.defineProperty(exports, "OsmiProvider", { enumerable: true, get: function () { return provider_1.OsmiProvider; } });
const hooks_1 = require("./core/hooks");
Object.defineProperty(exports, "useStyles", { enumerable: true, get: function () { return hooks_1.useStyles; } });
const hoc_1 = require("./core/hoc");
Object.defineProperty(exports, "withStyles", { enumerable: true, get: function () { return hoc_1.withStyles; } });
//# sourceMappingURL=index.js.map