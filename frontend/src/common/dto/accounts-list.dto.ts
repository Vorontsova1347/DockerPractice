import { UserDto } from '#common/dto/user.dto';
import { AppPagination } from '#common/classes/pagination';

export class AccountsListDto extends AppPagination<UserDto> {}
