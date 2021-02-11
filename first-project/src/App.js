import './App.css';
import Guitar from "./Guitar";
import {Component} from "react/cjs/react.production.min";
import guitarClassic from "./photos/guitarClassic.jpg"
import guitarRed from "./photos/guitarRed.jpg"
import ukulClassic from "./photos/ukulClassic.jpg"
import ukulYellow from "./photos/ukulYellow.jpg"
import Counter from "./Counter";
import ContactForm from "./ContactForm";


class App extends Component {
    state = {
        guitars: [
            {name: " TERRIS TF-3802С RD - акустическая фолк гитара ", strings: 6, photo: <img src={guitarRed}/>},
            {name: " Doff RG Russian Guitar ", strings: 7, photo: <img src={guitarClassic}/>},
            {name: " Укулеле сопрано TERRIS JUS 20 MAYA Afro", strings: 4, photo: <img src={ukulClassic}/>},
            {name: " TERRIS PLUS-50 YW Укулеле сопрано ", strings: 4, photo: <img src={ukulYellow}/>}
        ]
    }


    render() {
        return (
            <div>
                <div><Guitar guitarsProps={this.state.guitars}/></div>
                <div><Counter/></div>
                <div><ContactForm/></div>
            </div>


        )
    }
}

export default App;

