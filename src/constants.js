"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DRIVER_ALIASES = void 0;
var displayName = require('../package.json').displayName;
/**
 * Aliases for your driver. EG: PostgreSQL, PG, postgres can all resolve to your driver
 */
exports.DRIVER_ALIASES = [
    {
        displayName: displayName, value: displayName
    },
    {
        displayName: "Dolphin DB", value: "Dolphin DB"
    }
];
