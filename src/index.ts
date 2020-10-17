import User from "./models/User";

console.log("Cook js");

const user = new User({
  name: "Mario",
  age: 33,
});

user.set({ age: 10 });

const userAge = user.get("age");

console.log({ userAge });

user.on("click", () => console.log(1));
user.on("click", () => console.log(2));
user.on("hover", () => console.log(3));

user.trigger("click");
user.trigger("hover");
