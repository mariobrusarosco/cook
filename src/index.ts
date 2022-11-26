import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({
  name: "Mario", age: 20
})

const userForm = new UserForm(
  document.querySelector("#root") as Element,
  user
)

userForm.render()