import {Component} from "react/cjs/react.production.min";


class NewContactForm extends Component {

    render() {
        const {persons} = this.props;
        return (
            <div>

                {persons.map((person, index) =>
                    <div key={index}>{`Name: ${person.firstName} Last Name: ${person.lastName} Age: ${person.age}`}</div>
                )}
            </div>

        )
    }

}

export default NewContactForm;