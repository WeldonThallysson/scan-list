import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {VercelRequest, VercelResponse} from '@vercel/node'
import * as dotenv from 'dotenv'

dotenv.config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


export default async function handler(req: VercelRequest, res: VercelResponse){
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.init()

  app.getHttpAdapter().getInstance()(req,res)}
