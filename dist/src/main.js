"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
let cachedApp = null;
async function createNestApp() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.init();
    return cachedApp;
}
async function handler(req, res) {
    const app = await createNestApp();
    app.getHttpAdapter().getInstance()(req, res);
}
//# sourceMappingURL=main.js.map