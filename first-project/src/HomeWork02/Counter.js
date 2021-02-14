import {Component} from "react/cjs/react.production.min";
import {Button} from "reactstrap";
import s from "./Counter.module.css";

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
        } else (alert("Stop"))
    }


    render() {

        return (
            <div className={s.counterBoss}>
                <div>Your cart</div>
                <div><input className={s.inp} value={this.state.number} onChange={()=>{}}/></div>
                <div className={s.button}>
                    <Button onClick={() => this.addClick()}>Add guitar </Button>
                    <Button onClick={() => this.subtractClick()} className="subtract">Subtract guitar </Button>
                </div>

            </div>
        )
    }
}

export default Counter;