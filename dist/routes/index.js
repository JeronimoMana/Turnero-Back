"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = (0, express_1.Router)();
router.get("/users", controllers_1.UserController);
exports.default = router;
