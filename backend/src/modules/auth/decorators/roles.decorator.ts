import { SetMetadata } from '@nestjs/common';
import { UserRole } from '#common/enums/user-role.enum';

export const ROLES_METADATA = `ROLES`;
export const Roles = (...roles: UserRole[]) =>
  SetMetadata(ROLES_METADATA, roles);
