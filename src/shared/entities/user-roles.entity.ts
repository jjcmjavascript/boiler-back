export interface UserRolesPrimitive {
  id: number;
  userId: number;
  name: string;
}

export class UserRoles {
  #attributes: UserRolesPrimitive;

  constructor(readonly password: UserRolesPrimitive) {
    this.#attributes = password;
  }

  static create(role: Partial<UserRolesPrimitive>): UserRoles {
    return new UserRoles({
      id: role.id,
      userId: role.userId,
      name: role.name,
    });
  }

  toPrimitive(): UserRolesPrimitive {
    return {
      id: this.#attributes.id,
      userId: this.#attributes.userId,
      name: this.#attributes.name,
    };
  }
}
