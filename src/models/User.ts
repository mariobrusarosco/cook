import Eventing from "./Eventing";
import Sync from "./Sync";

export interface UserProps {
  id: number;
  age?: number;
  name?: string;
}

const hostUrl = "http://localhost:3000";

class User {
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(`${hostUrl}/users`);

  constructor(public data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: Partial<UserProps>) {
    Object.assign(this.data, update);
  }
}

export default User;
