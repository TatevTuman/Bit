import {Component} from "react/cjs/react.production.min";
import s from './App.module.css';
import Guitar from "./HomeWork01/Guitar";
import Counter from "./HomeWork02/Counter";
import ContactForm from "./HomeWork02/ContactForm";
import Task from "./Task";
import guitarClassic from "./photos/guitarClassic.jpg"
import guitarRed from "./photos/guitarRed.jpg"
import ukulClassic from "./photos/ukulClassic.jpg"
import ukulYellow from "./photos/ukulYellow.jpg"
import CustomerData from "./HomeWork03/CustomerData";


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
                <div className={s.allPages}></div>
                <div className={s.CounterPages}><Counter/></div>
                <div className={s.ContactFormPages}><ContactForm/></div>
                {/*   <div><Task/></div>*/}
                <div className={s.CustomerDataPages}><CustomerData/></div>


            </div>

        )
    }
}

export default App;

