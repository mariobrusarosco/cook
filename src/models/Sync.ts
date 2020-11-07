import axios, { AxiosPromise, AxiosResponse } from "axios";
import { UserProps } from "./User";

interface HasIdentifier {
  id: number;
}

class Sync<T extends HasIdentifier> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    }

    return axios.post(this.rootUrl, data);
  }
}

export default Sync;
