"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateColumnSchema = exports.columnSchema = exports.loginSchema = exports.signupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupSchema = zod_1.default.object({
    name: zod_1.default.string()
        .trim()
        .min(1, { message: "Name is required" })
        .max(100, { message: "Name must be of 100 character or fewer" }),
    email: zod_1.default.string()
        .trim()
        .email({ message: "Invalid email address" }),
    password: zod_1.default.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase character" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase character" })
        .regex(/[1-9]/, { message: "Password must contain at least one number" }),
    bio: zod_1.default.string()
        .trim()
        .max(100, { message: "Bio must be 100 characters or fewer" })
        .default("No bio provided")
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
exports.columnSchema = zod_1.default.object({
    title: zod_1.default.string()
        .trim()
        .max(50, { message: "title must be 50 character or fewer" }),
    content: zod_1.default.string()
        .trim()
        .max(200, { message: "Content must be 200 charater of fewer" }),
});
exports.updateColumnSchema = zod_1.default.object({
    id: zod_1.default.string(),
    title: zod_1.default.string()
        .trim()
        .max(50, { message: "title must be 50 character or fewer" }),
    content: zod_1.default.string()
        .trim()
        .max(200, { message: "Content must be 200 charater of fewer" }),
});
