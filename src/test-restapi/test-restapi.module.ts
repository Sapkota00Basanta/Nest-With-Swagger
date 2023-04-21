import { Module } from '@nestjs/common';
import { TestRestapiService } from './test-restapi.service';
import { TestRestapiController } from './test-restapi.controller';

@Module({
  controllers: [TestRestapiController],
  providers: [TestRestapiService]
})
export class TestRestapiModule {}
