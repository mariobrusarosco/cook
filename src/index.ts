import axios from "axios";
import { User } from "./models/User";

console.log("Cook js");

// class Person {
//   constructor() {}

//   age = "mario";
// }

// const person = new Person();

// const loggerError = (message: string): never | void => {
//   if (!message) {
//     throw new Error();
//   }
// };

// loggerError("test");

// const json = '{name: "mario"}';

// const parsed = JSON.parse(json) as string;

// Inference using 'in'
// interface Admin {
//   id: string;
//   role: string;
// }

// interface User {
//   id: string;
//   email: string;
// }

// function redirectUser(user: Admin | User) {
//   if ("role" in user) {
//     history.push(user.role);
//   } else {
//     history.push(user.email);
//   }
// }

// class Plumber {
//   constructor(public name: string) {}

//   introduce() {
//     console.log(`Hi, my name is ${this.name}`);
//   }
// }

// const mario = new Plumber("mario");
// mario.introduce();
// const luigi = new Plumber("luigi");
// luigi.introduce();

// const me = new User({});
// me.set({ age: 35 });
// const name = me.get("name");
// const age = me.get("age");

// console.log(me.data);

// me.set({ name: "Mario Brusarosco" });

// console.log(me.data);

// me.on("change", () => console.log("change #1"));
// me.on("change", () => console.log("change #2"));
// me.on("postMessage", () => console.log("message posted #1"));
// me.on("createUser", () =>
//   axios
//     .post("http://localhost:3000/users", {
//       id: `${Math.random().toString(16).slice(2, -1)}-${Math.random()
//         .toString(16)
//         .slice(2, -1)}-${Math.random()
//         .toString(16)
//         .slice(2, -1)}-${Math.random().toString(16).slice(2, -1)}`,
//       name: "Luigi",
//       age: 35,
//     })
//     .then((data: any) => console.log(data))
// );

// setTimeout(() => me.trigger("change"), 2000);
// setTimeout(() => me.trigger("postMessage"), 4000);
// setTimeout(() => me.trigger("change"), 6000);
// setTimeout(() => me.trigger("createUser"), 1000);

const user = new User({ id: "2" });

user.set({ name: "Luigi" });
user.save();
user.fetch();

user.events.on("change", () => console.log("I am the danger"));

setTimeout(() => {
  console.log(user?.data);
  user.events.trigger("change");
}, 3500);
