import { Eventing } from "./Eventing";
import { User, UserProps } from "./User";
import axios, { AxiosResponse } from 'axios'

export class Collection<T, Key> {
    models: T[] = []
    events: Eventing = new Eventing()
    
    constructor(public rootUrl: string, public deserialize: (json: Key) => T) {}

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
    }

    fetch() {
        axios.get(this.rootUrl).then((response: AxiosResponse) => {
            response.data.forEach((value: Key) => {
                this.models.push(this.deserialize(value))
            });

            this.trigger("change")
        })
    }
}