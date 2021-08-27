import React from "react";
import "./Products.css";
import Card from "./Card/Card";
import Addproduct from "../AddProduct/addproduct"
import "./ProductMedia.css"
import "../Products/Card/CardMedia.css"


export default (props)=>{
    return(
        <section id="SecOne">
            <h1>Shop</h1>
                <div className={"btnGroup"}>
                    {props.btnGroup.map((e,i)=>{
                        return(
                            <> 
                                <button key={i} onClick={props.FilterProduct.bind(this,e)}  className={e.classbtn}>{e.val}</button>
                            </>
                        )
                    })}
                </div>

            <div className="Products">
                {props.z? 
                    <div onClick={props.Cardadd2} className="Card CardAdm">
                        <h1>+</h1>   
                    </div>:null}
                    
                    {props.Cardadd?<Addproduct/>:null}
                    
                    
                {props.CopyProducts.map((e,i)=>{    
                    return i < props.Moresee?
                            <Card
                            UrlValueEdit={props.UrlValueEdit}
                                CloseEdit={props.CloseEdit}
                                ChangeUrlEdit = {props.ChangeUrlEdit}
                                ChangeUrl2={props.ChangeUrl22}
                                SeilBtn={props.SeilBtn}
                                InpNumberVal = {props.InpNumberVal}
                                ChangeNumber = {props.ChangeNumber}
                                z = {props.z} 
                                key={i} 
                                elem={e} 
                                index={i} 
                                Edit={props.Edit}
                                DeletBtn={props.DeletBtn}
                                AdminDeletBtn={props.AdminDeletBtn}  
                                ActualBtn={props.ActualBtn}
                                LearnMore={props.LearnMore}
                                BtnAddToBasket={props.BtnAddToBasket}
                                MinusBtn={props.MinusBtn}
                                PlusBtn={props.PlusBtn}
                                BtnLearnMore={props.BtnLearnMore}
                                products={props.products}
                                EditCardAdm={props.EditCardAdm}
                                EditOpenAndClose={props.EditOpenAndClose}
                                changeEdit={props.changeEdit}
                                CloseAdminCard={props.CloseAdminCard}
                                Cardadd={props.Cardadd}
                            />:null
                                
                })}
            </div>
            {props.CopyProducts.length > 2 ? 
                <button className={props.Moresee >= props.products.length? " btn btn-outline-danger" : "btn btn-secondary"} onClick={props.SeeMore} > 
                    {props.Moresee >= props.products.length?"See A Less ": "See A More" }
                </button>:null
            }
          
        </section>
    )
}