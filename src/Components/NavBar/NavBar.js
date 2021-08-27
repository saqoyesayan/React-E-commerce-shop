import React from "react";
import {NavLink} from "react-router-dom"
import "./NavBar.css";
import '../NavBar/NavBarMedia.css'

export default (props)=>{
    return(
        <nav> 
            <div className="icon">
                {props.ChangeBarsOpen ?<i style={{display:"block"}}
                onClick={props.BarsOpen}
                className="fa fa-times"></i>:
                <i className="fa fa-bars" onClick={props.BarsOpen}></i>
                }
            </div>
            {props.ChangeBarsOpen ? 
            <div className="ReponsivMain">
                <div className="ResponsiveBar">
                    <ul>
                        <li>
                            <NavLink exact to={'/'}>Home</NavLink>
                        </li>
                        <button className="btn btn-light">
                            All 
                        </button>
                        <button className="btn btn-light">
                            Vegetables
                        </button>
                        <button className="btn btn-light">
                            Fruits
                        </button>
                        <li>
                            <span className="span">{props.Actual.length}</span>
                            <NavLink to={'/actual'}>Actual</NavLink>
                        </li>
                        <li>
                            <span className="span">{props.Basket.length}</span>
                            <NavLink to={'/basket'}>Basket</NavLink>
                        </li>
                    </ul> 
                 </div>
                </div>
            :null}
            
           <ul>
                <li>
                    <NavLink className="btn btn-light" exact to={'/'}>Home</NavLink>
                </li>
                <li>
                    <span className="span">{props.Actual.length}</span>
                    <NavLink className="btn btn-light" to={'/actual'}>Actual</NavLink>
                </li>
                <li>
                    <span className="span">{props.Basket.length}</span>
                    <NavLink className="btn btn-light" to={'/basket'}>Basket</NavLink>
                </li>
            </ul> 
        </nav>  
    )
}