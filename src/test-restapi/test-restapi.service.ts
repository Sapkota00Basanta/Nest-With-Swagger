import { Injectable } from '@nestjs/common';
import { CreateTestRestapiDto } from './dto/create-test-restapi.dto';
import { UpdateTestRestapiDto } from './dto/update-test-restapi.dto';

@Injectable()
export class TestRestapiService {
  create(createTestRestapiDto: CreateTestRestapiDto) {
    return 'This action adds a new testRestapi';
  }

  findAll() {
    return `This action returns all testRestapi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testRestapi`;
  }

  update(id: number, updateTestRestapiDto: UpdateTestRestapiDto) {
    return `This action updates a #${id} testRestapi`;
  }

  remove(id: number) {
    return `This action removes a #${id} testRestapi`;
  }
}
