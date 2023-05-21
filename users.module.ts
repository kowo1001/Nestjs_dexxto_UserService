import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ApiController } from './api/api.controller';

@Module({
  controllers: [ApiController, UsersController],
  providers: [UsersService]
})
export class UsersModule {}
