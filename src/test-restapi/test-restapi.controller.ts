// Import Third-Party Modules
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

//Import User-Defined Modules
import { CreateTestRestapiDto } from './dto/create-test-restapi.dto';
import { UpdateTestRestapiDto } from './dto/update-test-restapi.dto';
import { TestRestapiService } from './test-restapi.service';

/**
 * Here, we are defining the test API Module Controller and it's Routes.
 * ApiTags decorator is used to change the HTTP route section name.
 */
@ApiTags('Test RestAPI Endpoints')
@Controller('test-restapi')
export class TestRestapiController {
  constructor(private readonly testRestapiService: TestRestapiService) {}

  /**
   * Simple example of POST Method for Swagger API Documentation.
   * We have designated decorators to indicate response based on http status code.
   * For instance,
   * a) ApiCreatedResponse is for status 201.
   * b) ApiUnprocessableEntityResponse is for status 422.
   * c) ApiForbiddenResponse is for status 403.
   * @param createTestRestapiDto Create API Endpoint Schema for properties
   * @returns Success messgae or response after creating resource.
   */
  @Post()
  @ApiCreatedResponse({ description: 'Create Example API Endpoint' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'UnAuthorized Request' })
  create(@Body() createTestRestapiDto: CreateTestRestapiDto) {
    return this.testRestapiService.create(createTestRestapiDto);
  }

  /**
   * Common Get Endpoints Example for Swagger OpenAPI Documentation.
   * Decorators used are: a) ApiOkResponse for sucess or 201.
   * b) ApiForbiddenResponse is for 403.
   */
  @Get()
  @ApiOkResponse({ description: 'Sucessfully Fetched Required Data.' })
  @ApiForbiddenResponse({ description: 'UnAuthorized Request.' })
  findAll() {
    return this.testRestapiService.findAll();
  }

  /**
   * Common Get Enpoints Example for Swagger OpenAPI Documenation.
   * Decorators used are: a) ApiNotFoundResponse is for when we can't
   * find the specific resource.
   * @param id Unique identifier for specific resource.
   * @returns Unique Resource based on param id.
   */
  @Get(':id')
  @ApiOkResponse({ description: 'Sucessfully fetched specific resource.' })
  @ApiForbiddenResponse({ description: 'UnAuthorized Request' })
  @ApiNotFoundResponse({
    description: 'The Resource is currently not available.',
  })
  findOne(@Param('id') id: string) {
    return this.testRestapiService.findOne(+id);
  }

  /**
   * Some Common Decorators used for PATCH EndPoint.
   * @param id unique identifier for specific resource.
   * @param updateTestRestapiDto Schema describing resource properties.
   * @returns Updated resource or simple message.
   */
  @Patch(':id')
  @ApiOkResponse({ description: 'The resource was updated sucessfully.' })
  @ApiForbiddenResponse({ description: 'UnAuthorized Request.' })
  @ApiNotFoundResponse({
    description: 'The resource is currently not available.',
  })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request.' })
  update(
    @Param('id') id: string,
    @Body() updateTestRestapiDto: UpdateTestRestapiDto,
  ) {
    return this.testRestapiService.update(+id, updateTestRestapiDto);
  }

  /**
   * Some Common Decorators used for DELETE API Endpoint.
   * @param id unique indentifier for specific resource.
   * @returns Deleted response message.
   */
  @Delete(':id')
  @ApiOkResponse({ description: 'The resource is deleted sucessfully.' })
  @ApiForbiddenResponse({ description: 'UnAuthorized Request' })
  @ApiNotFoundResponse({
    description: 'The resource is currently not available.',
  })
  remove(@Param('id') id: string) {
    return this.testRestapiService.remove(+id);
  }
}
