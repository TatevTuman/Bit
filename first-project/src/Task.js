import {Component} from "react/cjs/react.production.min";
import {Button} from "reactstrap";

class Task extends Component {
sate={
    name:"",
}


    addHover() {
        console.log(7);
    }

    render() {
        return (
            <div>

                <Button onMouseOver={() => this.addHover()}>CLICK ME</Button>
            </div>
        )
    }
}

export default Task;
