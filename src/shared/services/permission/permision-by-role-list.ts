import { Modules } from './types/modules.enum';
import { Permissions } from './types/permissions.enum';
import { Roles } from './types/roles.enum';

export const permissionByRoleList = [
  {
    role: Roles.Admin,
    modules: [
      {
        name: Modules.Product,
        permissions: [
          Permissions.Read,
          Permissions.Write,
          Permissions.Disabled,
          Permissions.Delete,
        ],
      },
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
