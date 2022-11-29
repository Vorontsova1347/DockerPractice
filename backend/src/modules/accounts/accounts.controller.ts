import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { RolesGuard } from '#src/modules/auth/guards/roles.guard';
import { Roles } from '#src/modules/auth/decorators/roles.decorator';
import { UserRole } from '#common/enums/user-role.enum';
import { AccountsService } from '#src/modules/accounts/accounts.service';
import { AccountsListDto } from '#common/dto/accounts-list.dto';
import { PaginationRequestDto } from '#common/dto/pagination-request.dto';

@UseGuards(RolesGuard)
@Controller(`accounts`)
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Get()
  @Roles(UserRole.ADMIN)
  async findAll(
    @Query() query: PaginationRequestDto,
  ): Promise<AccountsListDto> {
    return await this.accountsService.findAll(query);
  }

  @Delete(`/:id`)
  @Roles(UserRole.ADMIN)
  async deleteUser(@Param(`id`, ParseIntPipe) id: number): Promise<boolean> {
    return await this.accountsService.deleteUser(id);
  }
}
