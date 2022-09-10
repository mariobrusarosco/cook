import axios from "axios";

export class Sync {
  constructor() {}

  fetch() {
    const id = this.get("id");

    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response: AxiosResponse) => {
        this.set(response.data);
      });
  }

  save() {
    const id = this.get("id");
    console.log({ id });

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post(`http://localhost:3000/users/`, this.data);
    }
  }
}
