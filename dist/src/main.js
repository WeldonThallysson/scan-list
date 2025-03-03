"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
dotenv.config();
let cachedApp = null;
async function createNestApp() {
    if (!cachedApp) {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors({
            methods: 'GET,POST,PUT,DELETE',
            allowedHeaders: 'Content-Type, Authorization',
        });
        await app.init();
        cachedApp = app;
    }
    return cachedApp;
}
async function handler(req, res) {
    const app = await createNestApp();
    app.getHttpAdapter().getInstance()(req, res);
}
//# sourceMappingURL=main.js.map