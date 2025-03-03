import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VercelRequest, VercelResponse } from '@vercel/node';

let cachedApp: any = null;
async function createNestApp() {
    const app = await NestFactory.create(AppModule);
    
    app.enableCors();
    await app.init();
 
  return cachedApp;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const app = await createNestApp();

  app.getHttpAdapter().getInstance()(req, res);
}
