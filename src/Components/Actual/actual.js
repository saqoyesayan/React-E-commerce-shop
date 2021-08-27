import React from "react";
import Empty from "../Empty/empty"



export default (props)=>{
    return(
        <section>
            <h1 style={{textAlign:"center",fontSize:"50px"}}>Actual</h1>

           {props.Actual.length > 0 ?null:<Empty/>}

            <div className="BasketCard">
                {props.Actual.map((e,i)=>{
                    return(
                        <div key={e.id} className="Card">
                            <div className="Close">
                                <button onClick={props.BtnDeletToActual.bind(this,e,i)} class="deletbtn">X</button>
                            </div>
                            <img src={e.img} width={'100%'} height={'350px'} alt=""/>
                            <h1>Name ' {e.ProductName} </h1>
                            <h2>this product is Actual</h2>
                        </div>
                    )
                })}
            </div>
        </section>
        
    )
}

