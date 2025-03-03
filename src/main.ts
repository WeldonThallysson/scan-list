import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VercelRequest, VercelResponse } from '@vercel/node';
import * as dotenv from 'dotenv';

dotenv.config();

let cachedApp: any = null;

async function createNestApp() {
  // Só cria a aplicação se ainda não tiver sido criada
  if (!cachedApp) {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
      methods: 'GET,POST,PUT,DELETE',
      allowedHeaders: 'Content-Type, Authorization',
    });
    await app.init();
    cachedApp = app; // Armazena a instância criada
  }
  return cachedApp;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const app = await createNestApp();

  // Processa a requisição com a instância do NestJS já criada
  app.getHttpAdapter().getInstance()(req, res);
}
