"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var port = process.env.PORT || 3000;
server_1.default.listen(port, function () {
    console.log("Servidor listo en el puerto 3000");
});
