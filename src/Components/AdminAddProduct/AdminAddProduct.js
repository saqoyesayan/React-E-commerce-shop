import React from "react"
import "./AdminAddProduct.css"
import "./AdminAddProductMedia.css"

export default (props) =>{
    return(
        <div>
            {props.Cardadd ? 
            <div className="AdminCard">
                <div className="AdminCardChild">
                    <div onClick={props.CloseAdminCard} className="CloseAdminCard">X</div>
                    <input className="AdminCardInp" onChange={props.ChangeUrl.bind(props)} value={props.UrlValue} placeholder="Enter Product URL" />
                    <input className="AdminCardInp" onChange={props.ChangeName.bind(props)} value={props.NameValue} placeholder="Enter Product Name" />
                    <input className="AdminCardInp" onChange={props.ChangeCount.bind(props)} value={props.CountValue} placeholder="Enter Product Count" />
                    <input className="AdminCardInp" onChange={props.ChangePrice.bind(props)} value={props.PriceValue} placeholder="Enter Product Price" />
                    <span style={{margin:"10px",fontWeight:"bolder"}}><input onChange={props.ChangeType.bind(props)} value="fruits" type="radio" name="type" /> Fruits</span>
                    <span style={{fontWeight:"bolder"}}><input  onChange={props.ChangeType2.bind(props)} value="vegetables" type="radio" name="type" /> Vegetables</span>   
                    <textarea onChange={props.ChangeDescription.bind(props)} value={props.DesciptionValue} placeholder="Enter Product Description" />
                    <button onClick={props.addproduct} className="btn btn-success">Add Product</button>
                </div>
            </div>
            :null}
        </div>
    )

}