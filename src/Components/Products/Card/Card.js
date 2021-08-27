import React from "react";
import "./Card.css";
import "./CardMedia.css"
import "../ProductMedia.css"


export default (props)=>{
    return(
        <>
        {props.EditOpenAndClose ? 
            <div className="EditMain">
                <div className="EditChilde">
                    <div  className="CloseEdit">X</div>
                    <input onChange={props.ChangeUrlEdit.bind(props)} value={props.UrlValueEdit} />
                    <input />
                    <input />
                    <input />
                    <textarea />
                </div>
            </div>
        :null}

        <div className="Card" style={props.elem.actual?{
            backgroundColor:"lightgray",
            transform:"rotateX(360deg)",
            transition:"1s",
        }:null} >



            {props.z ? 
              <div className="DeletAndEdit">
                {!props.Edit ? <i onClick={props.EditCardAdm.bind(this,props.elem)}  class="fa fa-edit"></i>:null}
                <input  type="number" min="0" max="100" onChange={props.ChangeNumber.bind(this,props.elem)} value={props.elem.InpNumberVal}/>
                <button className={"btn btn-success"} onClick={props.SeilBtn.bind(this,props.elem)}>ok</button>
            </div>:null
            }
          

          
            <img src={props.elem.img} width={'100%'} height={'350px'} alt=""/>
            <h1>Name ' {props.elem.ProductName}</h1>
            <h2>Count ' {props.elem.Count} KG</h2>
            <h3>Price ' 
                <span style={props.elem.Seil !== 0?{textDecoration:'line-through'}:null}>{props.elem.Price}</span>
                {props.elem.Seil !== 0?
                <span style={{color:'green'}}>{props.elem.Seil}</span>
                :null}
             AMD</h3>
            <div>
                <button
                    disabled={props.elem.AddingCount === 1 ? true:false}
                    onClick={props.MinusBtn.bind(this,props.elem)} 
                    className="Minus btn btn-danger">-</button>

                <span className="mainCount">{props.elem.AddingCount}</span>

                <button 
                    disabled={props.elem.AddingCount === props.elem.Count ? true:false}
                    onClick={props.PlusBtn.bind(this,props.elem)} 
                    className="Plus btn btn-success">+</button>
            </div>
            <button  onClick={props.BtnAddToBasket.bind(this,props.elem,props.index)} 
            className={'btn btn-success btnAddBasket'}>Add To Basket</button>

            <button className="MEdiaaddbtn" onClick={props.BtnAddToBasket.bind(this,props.elem,props.index)} 
            ><i className="fa fa-shopping-cart"></i></button>            

            <button  onClick={props.ActualBtn.bind(this,props.index,props.elem)}
            className={props.elem.actual ? "btn btn-primary" : "btn btn-outline-primary"}>Actual</button>

            <button className="btnMediaAdd2" onClick={props.ActualBtn.bind(this,props.index,props.elem)}>
                <i className="fa fa-heart"></i>
            </button>
            {props.z ?  
                <button onClick={props.DeletBtn.bind(this,props.index,props.elem)}
                className={'btn btn-danger btnDeletMedia'}>Delete</button>
            :null}
           
            {props.z? 
            <button onClick={props.DeletBtn.bind(this,props.index,props.elem)}
            className={'btn btn-danger btnDeletMediaX'}>X</button> 
            :null}
             

            <button onClick={props.BtnLearnMore.bind(this,props.elem)} 
            className={'btn btn-info LernMoreMedia'}>Learn More</button>

            <button onClick={props.BtnLearnMore.bind(this,props.elem)} 
            className={'btn btn-info LernMoreMedia2'}><i className="fa fa-book-medical"></i></button>
        </div>
        </>
    )
}