import { UserProps } from "./User";

class Attributes<Type> {
  constructor(private data: Type) {}

  get<Key extends keyof Type>(key: Key): Type[Key] {
    return this.data[key];
  }

  set(update: Type) {
    Object.assign(this.data, update);
  }
}

const attrs = new Attributes<UserProps>({ id: 1, name: "asdsad" });

const id = attrs.get("id");

console.log(id);

export default Attributes;
