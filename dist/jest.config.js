"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    moduleFileExtensions: ["js", "json", "ts"],
    rootDir: ".",
    testEnvironment: "node",
    testRegex: ".*\\.spec\\.ts$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest"
    },
    moduleNameMapper: {
        "^src/(.*)$": "<rootDir>/src/$1"
    },
    modulePaths: ["<rootDir>/src"]
};
//# sourceMappingURL=jest.config.js.map