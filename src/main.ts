import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express'

dotenv.config();
const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  await app.init();

  app.enableCors()
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

export default async function handler(req: VercelRequest, res:VercelResponse) {
  const app = await NestFactory.create(AppModule);
  app.enableCors()

  await app.init();
  app.getHttpAdapter().getInstance()(req, res);
}
