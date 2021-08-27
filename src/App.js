import React, { Component } from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import Backet from "./Components/Backet/Backet";
import Login from "./Components/login/login"
import { Redirect, Route } from "react-router";
import Actual from "./Components/Actual/actual";
import AdminAddProduct from "./Components/AdminAddProduct/AdminAddProduct";
import ProductsJson from "./Products.json"



export default class App extends Component{
  
  state={
    Admin:{
      Login:'Admin',
      PassWord:'123456',
      val1:"",
      val2:"",
    },
    products:ProductsJson,
    CopyProducts:ProductsJson,
  Basket:[],
  Actual:[],
  UrlValue:"",
  UrlValueEdit:"",
  NameValue:"",
  CountValue:"",
  PriceValue:"",
  DesciptionValue:"",
  typevalue:"",
  typevalue2:"",
  z:false,
  Cardadd:false,
  ChangeBarsOpen:false,
  Moresee:2,
  EditOpenAndClose:false,
  btnGroup:[
    {val:"All",classbtn:"btnActive"},
    {val:"fruits",classbtn:""},
    {val:"vegetables",classbtn:""}
  ],
  }
  
  DeletBtn=(i,e)=>{
    this.state.products.splice(i,1);
    this.setState({})
  }

  ActualBtn=(i,e)=>{
    e.actual = !e.actual
    this.setState({})
    e.indexProduct = i
    var n=this.state.Actual.find(k=> k === e)
    if(n === undefined){
      this.state.Actual.push(e)
      this.setState({})
    }
    else{
      this.setState({})
    }
  }
 
  LearnMore = (e) =>{
    e.LearnMore = !e.LearnMore
    this.setState({})
  }


  LoginOneBtn=(One)=>{
    this.setState({
      val1:One.target.value,
    })
  }

  LoginTwoBtn=(Two)=>{
    this.setState({
      val2:Two.target.value,
    })
  }
  
  Click=()=>{
    if(this.state.val1 === this.state.Admin.Login && this.state.val2 === this.state.Admin.PassWord){
      this.state.z =! this.state.z
    }
    else{
      alert("sxal Login kam Password")
    }
    this.setState({})
  }

  MinusBtn=(e)=>{
    e.AddingCount--
    this.setState({})
  }

  PlusBtn=(e)=>{
    e.AddingCount++
    this.setState({})
  }

  BtnAddToBasket=(e,i)=>{
    e.indexProduct = i
    var x=this.state.Basket.find(k=> k === e)
    if(x === undefined){
      this.state.Basket.push(e)
      this.setState({})
    }
    else{
      this.setState({})
    }
    e.BasketCount += e.AddingCount
    e.Count -= e.AddingCount
    if(e.AddingCount > e.Count){
      e.AddingCount = e.Count
      this.setState({})
    }
    e.BasketPrice = e.BasketCount * e.Price
    this.setState({})
    if(e.Count === 0 ){
      this.state.products.splice(e.indexProduct,1,)
      this.setState({})
    }
  }

  BtnDeletToBasket=(e,i)=>{
    var y=this.state.products.find(k=> k === e)
    if(y === e){
      this.state.Basket.splice(i,1)
    }else{
      this.state.products.splice(e.indexProduct,0,e)
      this.state.Basket.splice(i,1)
    }
      e.Count = e.Count + e.BasketCount
      e.BasketCount= e.DeletBasketCount
      e.AddingCount= e.DeletAddingCount
      this.setState({})
  }

  BtnDeletToActual = (e,i) =>{
    var z=this.state.products.find(k=> k === e)
    if(z === e){
      this.state.Actual.splice(i,1)
    }else{
      this.state.products.splice(e.indexProduct,0,e)
      this.state.Actual.splice(i,1)
    }
      e.Count = e.Count + e.BasketCount
      e.BasketCount= e.DeletBasketCount
      e.AddingCount= e.DeletAddingCount
      this.setState({})
  }

  BtnLearnMore=(e)=>{
    this.setState({
      LearnMore:true,
      LearnMoreCard:e,
    })
  }

  LearnMore = () =>{
    this.setState({
      LearnMore:false
    })
  }

  CloseLearnMore=()=>{
    this.setState({
      LearnMore:false
    })
  }


  Cardadd2 = () =>{
    this.state.Cardadd =!this.state.Cardadd
    this.setState({})
  }




  addproduct = () =>{
    var x = {
      id:this.state.products.length,
      indexProduct:0,
      type:this.state.typevalue,
      img:this.state.UrlValue,
      ProductName:this.state.NameValue,
      Count:this.state.CountValue,
      MAinCount:1,
      Price:this.state.PriceValue,
      BasketCount:0,
      BasketPrice:0,
      AddingCount:1,
      actual:false,
      LearnMore:false,
      x:false,
      Actuallength:false,
      DeletBasketCount:0,
      DeletAddingCount:1,
      Discription:this.state.DesciptionValue
    }
    var y = this.state.products.find(k => k.ProductName === x.ProductName)
    if(y === undefined){
      this.state.products.push(x)
    }
      this.setState({
        UrlValue:"",
        NameValue:"",
        CountValue:"",
        PriceValue:"",
        typevalue:"",
        DesciptionValue:"",
        Cardadd:false
      })
  }

  CloseAdminCard = () =>{
    this.setState({
      Cardadd:false
    })
  }


  ChangeUrl =(k)=>{
    this.setState({
      UrlValue:k.target.value
    })
  }

  ChangeUrlEdit = (k) =>{
    this.setState({
      UrlValueEdit:k.target.value,
    })
    console.log(k.value);
  }

  ChangeName = (k) =>{
    this.setState({
      NameValue:k.target.value
    })
  }

  ChangeCount = (k) =>{
    this.setState({
      CountValue:k.target.value
    })
  }

  ChangePrice = (k) =>{
    this.setState({
      PriceValue:k.target.value
    })
  }


  ChangeDescription = (k) =>{
    this.setState({
      DesciptionValue:k.target.value
    })
  }

  ChangeType = (k) =>{
    this.setState({
      typevalue:k.target.value
    })
    console.log(k.target.value)
  }

  
  ChangeType2 = (k) =>{
    this.setState({
      typevalue:k.target.value
    })
    console.log(this.state.typevalue2)
  }


  
  BarsOpen = () =>{
    this.state.ChangeBarsOpen =! this.state.ChangeBarsOpen
    this.setState({})
  }


  FilterVegetables = () =>{
    var CopyProduct = this.state.products
    CopyProduct.filter((k =>{
      return(
        CopyProduct.type === "vegetables"
      )
    }))
      console.log(CopyProduct)
  }


  SeeMore = () =>{
    if(this.state.Moresee >= this.state.products.length){
      this.state.Moresee = 0
    }
    this.state.Moresee += 2
    this.setState({})
  }



  FilterProduct = (e) =>{
    var FiltredProd = this.state.products.filter(k => k.type === e.val)
    var x = this.state.btnGroup.find(k => k.classbtn !== "")
   
   if(e.val === "All"){
     this.state.CopyProducts = this.state.products
     this.setState({})
   }else{
     this.state.CopyProducts = FiltredProd
     this.setState({})
   }
   x.classbtn = ''
   e.classbtn = 'btnActive'
  }


  ChangeNumber = (e,k) =>{
    e.InpNumberVal = k.target.value
    this.setState({})
  }


  SeilBtn = (e) =>{
    if(e.InpNumberVal !== 0){
      e.Seil = e.Price-((e.Price / 100)*e.InpNumberVal)
    }else{
     return null
    }
    this.setState({})
  }

  ChangeUrl2 = (e) =>{
    this.state.UrlValue = e.img 
    this.setState({})
  }



  EditCardAdm = (e) =>{
    this.state.EditOpenAndClose = !this.state.EditOpenAndClose
    this.setState({})
    console.log()
  }
  

  render(){
    return(
    <>
    {this.state.LearnMore ? 
      <div className="LearnMoreOpacity">
        <div className="LearnMore">
          <img src={this.state.LearnMoreCard.img} width={"100%"} height={"400px"} alt=""/>
          <h3>Anun` {this.state.LearnMoreCard.ProductName}</h3>
          <h3>Qanak` {this.state.LearnMoreCard.Count}</h3>
          <h3>Gin` {this.state.LearnMoreCard.Price}</h3>
          <p>{this.state.LearnMoreCard.Discription}</p>
          <button className="btn btn-danger closeXLernMore" onClick={this.CloseLearnMore}>X</button>
        </div>
      </div>:null}
      
      
      <AdminAddProduct
        Cardadd={this.state.Cardadd}
        UrlValue={this.state.UrlValue}
        NameValue={this.state.NameValue}
        CountValue={this.state.CountValue}
        PriceValue={this.state.PriceValue}
        DesciptionValue={this.state.DesciptionValue}
        CloseAdminCard={this.CloseAdminCard}
        ChangeUrl={this.ChangeUrl}
        ChangeName={this.ChangeName}
        ChangeCount={this.ChangeCount}
        ChangePrice={this.ChangePrice}
        ChangeDescription={this.ChangeDescription}
        addproduct={this.addproduct}
        ChangeType={this.ChangeType}
        ChangeType2={this.ChangeType2}
      />

      
      

      <Route  path={"/login"}>
        <Login
          val1 = {this.state.val1}
          val2 = {this.state.val2}
          z = {this.state.z}
          Admin={this.state.Admin}
          LoginOneBtn={this.LoginOneBtn}
          LoginTwoBtn={this.LoginTwoBtn}
          Click={this.Click}/>
      </Route>

      <Header
        Actual={this.state.Actual}
        Basket={this.state.Basket}
        BarsOpen={this.BarsOpen}
        ChangeBarsOpen={this.state.ChangeBarsOpen}
        FilterVegetables={this.FilterVegetables}
      />
      
      

      <Route exact path={"/"}>
        <Products
        UrlValueEdit={this.state.UrlValueEdit}
        ChangeUrlEdit={this.ChangeUrlEdit}
          EditOpenAndClose = {this.state.EditOpenAndClose}
          SeilBtn={this.SeilBtn}
          CopyProducts={this.state.CopyProducts}
          InpNumberVal = {this.state.products.InpNumberVal}
          ChangeNumber = {this.ChangeNumber}
          FilterProduct = {this.FilterProduct}
          btnGroup = {this.state.btnGroup}
          SeeMore = {this.SeeMore}
          Moresee={this.state.Moresee}
          CloseAdminCard = {this.CloseAdminCard}
          Cardadd2={this.Cardadd2}
          z = {this.state.z}
          products={this.state.products} 
          DeletBtn={this.DeletBtn}
          AdminDeletBtn={this.AdminDeletBtn}
          LearnMore={this.LearnMore}
          ActualBtn={this.ActualBtn}
          MinusBtn={this.MinusBtn}
          PlusBtn={this.PlusBtn}
          BtnAddToBasket={this.BtnAddToBasket}
          BtnLearnMore={this.BtnLearnMore}
          EditCardAdm={this.EditCardAdm}
          Cardadd={this.state.Cardadd}
        />
      </Route>




      <Route path={"/actual"}>
        <Actual 
            products={this.state.products}
            Actual={this.state.Actual} 
            BtnDeletToActual={this.BtnDeletToActual}/>
      </Route>

        <Route path={"/basket"}>
          <Backet 
            products={this.state.products}
            Basket={this.state.Basket} 
            BtnDeletToBasket={this.BtnDeletToBasket}
          />
        </Route>
      <Footer/>
    </>
    )
  }
}


