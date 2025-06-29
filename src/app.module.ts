import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncryptsModule } from './encrypts/encrypts.module';

@Module({
  imports: [EncryptsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
