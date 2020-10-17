import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id: string;
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

  set(update: Partial<UserProps>) {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {
    this.events[eventName]
      ? this.events[eventName] = [...this.events[eventName], callback]
      : this.events[eventName] = [callback];
  }

  trigger(eventName: string) {
    const eventCallbacks = this.events[eventName];
    const emptyEvent = !eventCallbacks || !eventCallbacks?.length;

    if (emptyEvent) return;

    eventCallbacks.forEach((callback: Callback) => callback());
  }

  fetch() {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse) => {
        console.log({ response })
        this.set(response.data)
    }))
  }

  save() {
    const id = this.get('id') 

    if(id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data)
    }else {
      axios.post('http://localhost:3000/users', this.data)
    }
  }
}

export default User;
