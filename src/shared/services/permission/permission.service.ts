import { Roles } from './types/roles.enum';
import { Permission as IPermission } from './interface/permission.interface';
import { permissionByRoleList } from './permision-by-role-list';

export class PermissionService {
  private static permissions: IPermission[] = permissionByRoleList;

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
