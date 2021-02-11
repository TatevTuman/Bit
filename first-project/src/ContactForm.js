import {Component} from "react/cjs/react.production.min";
import "./ContactForm.css";


class ContactForm extends Component {
    state = {
        name: "",
        lastName: "",
    }

    addName() {
        const userName = document.getElementById("name").value;
        this.setState = {name: userName}
        console.log(this.setState)
    }

    addLastName() {
        const userLastName = document.getElementById("last_name").value;
        this.setState = {lastName: userLastName}
        console.log(this.setState)
    }


    render() {
        return (
            <div className="contactForm">
                <div className="titleContactForm">Contact form</div>
                <input id="name" onChange={() => this.addName()} type="text" placeholder="Your name"/>
                <input id="last_name" onChange={() => this.addLastName()} type="text" placeholder="Your last name"/>
            </div>

        )
    }

}

export default ContactForm;


