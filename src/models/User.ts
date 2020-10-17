interface UserProps {
  age: number;
  name: string;
}

type Callback = () => {};

class User {
  events: {
    [key: string]: Callback[];
  } = {};

  constructor(public data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: Partial<UserProps>): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    this.events[eventName]
      ? this.events[eventName] = [...this.events[eventName], callback]
      : this.events[eventName] = [callback];
  }

  trigger(eventName: string): void {
    const eventCallbacks = this.events[eventName];
    const emptyEvent = !eventCallbacks || !eventCallbacks?.length;

    if (emptyEvent) return;

    eventCallbacks.forEach((callback: Callback) => callback());
  }
}

export default User;
