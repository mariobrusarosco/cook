import { User } from "./models/User";

console.log("Cook js");

class Person {
  constructor() {}

  age = "mario";
}

const person = new Person();

const loggerError = (message: string): never | void => {
  if (!message) {
    throw new Error();
  }
};

loggerError("test");

const json = '{name: "mario"}';

// const parsed = JSON.parse(json) as string;

// Inference using 'in'
interface Admin {
  id: string;
  role: string;
}

interface User {
  id: string;
  email: string;
}

// function redirectUser(user: Admin | User) {
//   if ("role" in user) {
//     history.push(user.role);
//   } else {
//     history.push(user.email);
//   }
// }

const me = new User({});
me.set({ age: 35 });
const name = me.get("name");
const age = me.get("age");

console.log(me.data);

me.set({ name: "Mario Brusarosco" });

console.log(me.data);
