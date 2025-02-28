import { VercelRequest, VercelResponse } from '@vercel/node';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module'; 

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS
  app.enableCors();

  // Inicializa a aplicação NestJS
  await app.init();

  // Processa a requisição com a instância Express (Vercel)
  app.getHttpAdapter().getInstance()(req, res);
}
