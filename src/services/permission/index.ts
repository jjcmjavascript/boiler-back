import { Modules } from './types/modules.enum';
import { Permissions } from './types/permissions.enum';
import { Roles } from './types/roles.enum';
import { Permission as IPermission } from './interface/permission.interface';

export class PermissionService {
  private static permissions: IPermission[] = [
    {
      role: Roles.Admin,
      modules: [
        {
          name: Modules.Product,
          permissions: [
            Permissions.Read,
            Permissions.Write,
            Permissions.Delete,
          ],
        },
      ],
    },
  ];

  public static getModulesByRoles(roles: Roles[]): string[] {
    let modules = [];
    const permissions = PermissionService.permissions;

    roles.forEach((role) => {
      const currentRoleModules = permissions.find((p) => (p.role = role));

      modules = [...modules, currentRoleModules.modules.map((m) => m.name)];
    });

    const modulesSet = new Set(modules);

    return [...modulesSet];
  }

  public static getModulesActionsByRoles(
    roles: Roles[],
  ): Record<string, string[]> {
    const modulesActions = {};
    const permissions = PermissionService.permissions;

    roles.forEach((role) => {
      const currentRoleModules = permissions.find((p) => (p.role = role));

      currentRoleModules.modules.forEach((module) => {
        modulesActions[module.name] = module.permissions;
      });
    });

    return modulesActions;
  }
}
