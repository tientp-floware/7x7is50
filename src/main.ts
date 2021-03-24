import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ConfigService } from './config/config.service';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('PORT >>> ',app.get('ConfigService').get('PORT'));
  await app.listen(app.get('ConfigService').get('PORT'));
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();