import {Component} from "react/cjs/react.production.min";
import NewContactForm from "./NewContactForm";
import s from "./CustomerData.module.css"

class CustomerData extends Component {


    state = {
        persons: [],
        firstName: "",
        lastName: "",
        age: 0,
    }


    returnFirstName = (event) => {
        const userFirstName = event.target.value;
        this.setState({
            firstName: userFirstName
        })
    }

    returnLastName(event) {
        const userLastName = event.target.value;
        this.setState({
            lastName: userLastName
        })
    }

    returnAge(event) {
        const returnAge = event.target.value;
        this.setState({
            age: returnAge
        })
    }


    addPerson = () => {
        this.setState({
            persons: [...this.state.persons, {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
            }],

            firstName: "",
            lastName: "",
            age: 0,
        })
    }


    deleteAll = () => {
        /*       let persons = this.state.persons;
               persons.pop()
               this.setState({
                   persons: persons
               })*/
        let persons = this.state.persons;
        persons.splice(-1, 1)
        this.setState({
            persons: persons
        })
    }


    render() {
        return (
            <div className={s.inputs}>
                <div>Contact Form:</div>
                <input placeholder="Your name" type="text"
                       value={this.state.firstName}
                       onChange={this.returnFirstName}/>
                <input placeholder="Your Last name" type="text"
                       value={this.state.lastName}
                       onChange={(event) => this.returnLastName(event)}/>
                <input placeholder="Your age" type="text"
                       value={this.state.age} onChange={(event) => this.returnAge(event)}/>


                <NewContactForm persons={this.state.persons}/>
                <div className={s.button}>
                    <button className={s.button1} onClick={this.addPerson}>Add</button>
                    <button className={s.button2} onClick={this.deleteAll}>Delete</button>
                </div>

            </div>
        )
    }
}

export default CustomerData