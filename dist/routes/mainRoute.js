"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const authRouter_1 = __importDefault(require("./authRouter"));
const router = (0, express_promise_router_1.default)();
//Use Authen router
router.use(authRouter_1.default);
exports.default = router;
