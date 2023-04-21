// Import Third-Party Modules
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * This is displayed as schema in Swagger API Documentation.
 * To define properties we simply need to add decorators from
 * swagger package for NestJS.
 * Here, ApiProperty and ApiPropertyOptional uses javascript objects and
 * not Typescript objects. So, we use String type and not string.
 */
export class CreateTestRestapiDto {
  @ApiProperty({
    type: String,
    description: 'This is an example of required field setup',
  })
  requiredPropertyExample: string;

  @ApiPropertyOptional({
    type: String,
    description: 'This is an example of non required or optional field setup',
  })
  optionalPropertyExample: string;
}
