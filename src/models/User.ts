import Attributes from "./Attributes";
import Eventing, { Callback } from "./Eventing";
import Sync from "./Sync";

export interface UserProps {
  id?: number;
  age?: number;
  name?: string;
}

const hostUrl = "http://localhost:3000";

class User {
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(`${hostUrl}/users`);
  attributes: Attributes<UserProps>;

  constructor(data: UserProps) {
    this.attributes = new Attributes(data);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  // set(update: Partial<UserProps>) {
  //   Object.assign(this.data, update);
  // }
}

export default User;
