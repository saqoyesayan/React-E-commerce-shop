import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar"
import "../Header/headerMedia.css"


export default (props)=>{
    return(
        <header>
            <NavBar 
                BarsOpen={props.BarsOpen}
                ChangeBarsOpen={props.ChangeBarsOpen}
                Actual = {props.Actual}
                Basket = {props.Basket}
                FilterVegetables={props.FilterVegetables}
            />
            
            <div className="HeaderPage">
                <h1>Welcome To My First Shop</h1>
            </div>
            
        </header>
    )
}