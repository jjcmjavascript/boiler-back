export interface PushNotificationTokenPrimitive {
  id: number;
  userId?: number;
  token: string;
}

export class PushNotificationToken {
  #attributes: PushNotificationTokenPrimitive;

  constructor(
    readonly pushNotificationTokenPrimitive: PushNotificationTokenPrimitive,
  ) {
    this.#attributes = pushNotificationTokenPrimitive;
  }

  static create(
    pushNotificationTokenPrimitive: Partial<PushNotificationTokenPrimitive>,
  ): PushNotificationToken {
    return new PushNotificationToken({
      id: pushNotificationTokenPrimitive.id,
      userId: pushNotificationTokenPrimitive.userId,
      token: pushNotificationTokenPrimitive.token,
    });
  }

  toPrimitive(): PushNotificationTokenPrimitive {
    return {
      id: this.#attributes.id,
      userId: this.#attributes.userId,
      token: this.#attributes.token,
    };
  }
}
