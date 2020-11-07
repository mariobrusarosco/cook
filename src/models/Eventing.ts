export type Callback = () => {};

class Eventing {
  events: {
    [key: string]: Callback[];
  } = {};

  on(eventName: string, callback: Callback) {
    this.events[eventName]
      ? (this.events[eventName] = [...this.events[eventName], callback])
      : (this.events[eventName] = [callback]);
  }

  trigger(eventName: string) {
    const eventCallbacks = this.events[eventName];
    const emptyEvent = !eventCallbacks || !eventCallbacks?.length;

    if (emptyEvent) return;

    eventCallbacks.forEach((callback: Callback) => callback());
  }
}

export default Eventing;
