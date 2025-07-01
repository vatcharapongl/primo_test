import { Module } from '@nestjs/common';
import { EncryptsService } from './encrypts.service';
import { EncryptsController } from './encrypts.controller';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports:[ConfigModule],
  controllers: [EncryptsController],
  providers: [EncryptsService],
})
export class EncryptsModule {}
