import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AdminModule } from './admin.module';

async function bootstrap() {
    const app = await NestFactory.create(AdminModule);
    app.enableCors();
    console.log('server is start in port 3000');
    const config = new DocumentBuilder()
        .setTitle('admin 文档')
        .setDescription('topfullstack admin 服务端文档')
        .setVersion('1.0')
        .addTag('users')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);
    await app.listen(3000);
}
bootstrap();
