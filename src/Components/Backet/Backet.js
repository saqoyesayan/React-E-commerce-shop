import React from "react";
import "./Backet.css";
import Empty from "../Empty/empty"

export default (props)=>{
    return(
        <section>
            <h1 style={{textAlign:"center",fontSize:"50px"}}>Basket</h1>
            
            {props.Basket.length > 0 ?
            <div className="BasketCard">
                {props.Basket.map((e,i)=>{
                    return(
                        <div key={e.id} className="Card">
                            <div className="Close">
                                <button  onClick={props.BtnDeletToBasket.bind(this,e,i)} class="deletbtn">X</button>
                            </div>
                            <img src={e.img} width={'100%'} height={'350px'} alt=""/>
                            <h1>Name ' {e.ProductName} </h1>
                            <h2>Count ' {e.BasketCount} KG</h2>
                            <h2>Price ' {e.BasketPrice} AMD</h2>
                        </div>
                    )
                })}
            </div>:<Empty/>}
        </section>
        
    )
}
