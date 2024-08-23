"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var driver_1 = require("./driver");
var constants_1 = require("../constants");
var dolphindbDriverPlugin = {
    register: function (server) {
        constants_1.DRIVER_ALIASES.forEach(function (_a) {
            var value = _a.value;
            server.getContext().drivers.set(value, driver_1.default);
        });
    },
};
exports.default = dolphindbDriverPlugin;
