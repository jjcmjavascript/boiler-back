import { Permission } from './interface/permission.interface';
import { Modules } from './types/modules.enum';
import { Permissions } from './types/permissions.enum';
import { Roles } from './types/roles.enum';

export const permissionByRoleList: Array<Permission> = [
  {
    role: Roles.Admin,
    modules: [
      {
        name: Modules.User,
        permissions: [Permissions.Read, Permissions.Write],
      },
    ],
  },
  {
    role: Roles.Admin,
    modules: [
      {
        name: Modules.User,
        permissions: [
          Permissions.Read,
          Permissions.Write,
          Permissions.Delete,
          Permissions.Disabled,
          Permissions.CreateUserAdmin,
        ],
      },
    ],
  },
];
