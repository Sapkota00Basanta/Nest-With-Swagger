import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestRestapiModule } from './test-restapi/test-restapi.module';

@Module({
  imports: [TestRestapiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
