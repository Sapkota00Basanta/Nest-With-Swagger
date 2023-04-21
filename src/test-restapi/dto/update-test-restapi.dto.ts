import { PartialType } from '@nestjs/mapped-types';
import { CreateTestRestapiDto } from './create-test-restapi.dto';

export class UpdateTestRestapiDto extends PartialType(CreateTestRestapiDto) {}
