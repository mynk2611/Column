"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.signupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupSchema = zod_1.default.object({
    name: zod_1.default.string()
        .min(1, { message: "Name is required" })
        .max(100, { message: "Name must be of 100 character or fewer" }),
    email: zod_1.default.string()
        .email({ message: "Invalid email address" }),
    password: zod_1.default.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase character" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase character" })
        .regex(/[1-9]/, { message: "Password must contain at least one number" }),
    bio: zod_1.default.string()
        .max(100, { message: "Bio must be 160 characters or fewer" }),
});
exports.loginSchema = zod_1.default.object({
    email: zod_1.default.string()
        .email({ message: "Invalid email address" }),
    password: zod_1.default.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase character" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase character" })
        .regex(/[1-9]/, { message: "Password must contain at least one number" }),
});
