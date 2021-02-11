import React from "react";
import {Component} from "react/cjs/react.production.min";


class Guitar extends Component {

    render() {
        const {guitarsProps} = this.props;
        /* console.log(guitarsProps);*/
        const allGuitar = guitarsProps.map((guit, index) => (
            <div className="block" key={index} id={index}>
                {guit.photo}
                <strong>Название:</strong> {guit.name}
                <strong>Струны:</strong> {guit.strings}
            </div>

        ))
        /*console.log(allGuitar)*/
        const allGuitars = guitarsProps.filter(function (guit) {
            return guit.strings > 5;
        });
        const newGuitars = allGuitars.map((guit, index) => (
            <div className="block" key={index} id={index}>
                {guit.photo}
                <strong>Название:</strong> {guit.name}
                <strong>Струны:</strong> {guit.strings}
            </div>

        ))
        /*console.log(allGuitars);*/
        return (
            //Чтобы увидеть работу filter вставь сюда newGuitars
            <div>{allGuitar}</div>
        )
    }
}

export default Guitar;





