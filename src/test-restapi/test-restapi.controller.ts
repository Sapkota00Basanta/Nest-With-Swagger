// Import Third-Party Modules
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

//Import User-Defined Modules
import { TestRestapiService } from './test-restapi.service';
import { CreateTestRestapiDto } from './dto/create-test-restapi.dto';
import { UpdateTestRestapiDto } from './dto/update-test-restapi.dto';

/**
 * Here, we are defining the test API Module Controller and it's Routes.
 * ApiTags decorator is used to change the HTTP route section name.
 */
@ApiTags('Test RestAPI Endpoints')
@Controller('test-restapi')
export class TestRestapiController {
  constructor(private readonly testRestapiService: TestRestapiService) {}

  @Post()
  create(@Body() createTestRestapiDto: CreateTestRestapiDto) {
    return this.testRestapiService.create(createTestRestapiDto);
  }

  @Get()
  findAll() {
    return this.testRestapiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testRestapiService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestRestapiDto: UpdateTestRestapiDto,
  ) {
    return this.testRestapiService.update(+id, updateTestRestapiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testRestapiService.remove(+id);
  }
}
