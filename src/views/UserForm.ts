import { User } from "../models/User"

export class UserForm {
    constructor(public parent: Element, public model: User){
        this.onSetRandomAgeClick = this.onSetRandomAgeClick.bind(this)
        this.onButtonClick = this.onButtonClick.bind(this)
        this.onSetNameClick = this.onSetNameClick.bind(this)

        this.model.on('change', () => {
            this.render()
        })
    }


    eventsMap(): Record<string, () => void> {
        return {
            'click:button': this.onButtonClick,
            'click:.random': this.onSetRandomAgeClick,
            'click:.change-name': this.onSetNameClick,
        }
    }

    onButtonClick() {
        console.log('button has clicked')
    }

    onSetRandomAgeClick() {
        this.model.setRandomAge()
    }

    // To avoid bind()...
    // onSetNameClick() => {
    onSetNameClick() {
        const input =  this.parent.querySelector(".change-name-input") as HTMLInputElement

        const name = input?.value;

        this.model.set({ name })
    }

    template() {
        return `
            <div>
                <div>
                    <h1 class="heading">User Form</h1>
                    <input class="change-name-input" />
                    <button class="change-name">Change name</button> 
                    <button class="random">random age</button> 
                </div>


                <div class="display-area">
                    <h2 class="heading">User name: ${this.model.get("name")}</h2>
                    <h3 class="heading">User age: ${this.model.get("age")}</h3>
                </div>  
            </div>
        `
    }

    bindEvents(documentFrament: DocumentFragment) {
        const eventsMap = this.eventsMap()

        for(let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(":")

            documentFrament.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey])
            })
            
        }
    }
    
    render() {
        this.parent.innerHTML = ''

        const templateElement = document.createElement("template")
        templateElement.innerHTML = this.template()

        this.bindEvents(templateElement.content)

        this.parent.append(templateElement.content)
    }
}