import React from "react";
import {Component} from "react/cjs/react.production.min";


class Guitar extends Component {

    render() {
        const {guitarsProps} = this.props;
        /* console.log(guitarsProps);*/
        const allGuitar = guitarsProps.map((guit, index) => (
            <div key={index} id={index}>
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
            <div key={index} id={index}>
                {guit.photo}
                <strong>Название:</strong> {guit.name}
                <strong>Струны:</strong> {guit.strings}
            </div>

        ))
        /*console.log(allGuitars);*/
        return (
            //To see how filter works, paste here newGuitars
            <div>{allGuitar}</div>
        )
    }
}

export default Guitar;





