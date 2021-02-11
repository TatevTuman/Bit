import {Component} from "react/cjs/react.production.min";
import {Button} from "reactstrap";
import "./Counter.css";

class Counter extends Component {
    state = {
        number: 0
    }

    addClick() {
        this.setState({number: this.state.number += 1})
    }

    subtractClick() {
        if (this.state.number > 0) {
            this.setState({number: this.state.number -= 1})
        } else (alert("Меньше 0 нельзя"))
    }

    render() {

        return (
            <div className="buttonDiv">

                <Button onClick={() => this.addClick()} className="add">Add guitar </Button>
                <div className="input"><input value={this.state.number}/></div>
                <Button onClick={() => this.subtractClick()} className="subtract">Subtract guitar </Button>
            </div>
        )
    }
}

export default Counter;