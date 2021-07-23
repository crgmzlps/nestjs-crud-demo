import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './models/entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
@Crud({
  model: {
    type: User,
  },
})
@ApiTags('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
