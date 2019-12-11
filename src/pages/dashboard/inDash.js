import React from 'react';
import API from '../../services/api'

export default class dashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: document.cookie, 
            productName: undefined,
            productImage: undefined,
            productInfo: undefined,
            productTag:undefined,
            productPrice: undefined,
            productId:undefined,
            newProductName: undefined,
            newProductImage: undefined,
            newProductInfo: undefined,
            newProductTag:undefined,
            newProductPrice: undefined
         }
        this.onChange = (e) => {
            const cState = Object.assign({}, this.state)
            const field = e.target.id
            cState[field] = e.target.value
            this.setState(cState) 
        }
        this.handleSubmit = (change) =>{
            // console.log(this.state.token)
            API.post(`/changeProduct?change=${change}`, this.state, {headers: {Authorization: `Bearer ${this.state.token}`}}).then((res)=>{
                if(res.data.status != "succes"){
                    alert("Something wrong happened. Try to log in again or contact me")
                    this.setState({
                        productId:undefined,
                        newProductName: undefined,
                        newProductImage: undefined,
                        newProductInfo: undefined,
                        newProductTag:undefined,
                        newProductPrice: undefined
                    })
                }else{
                    alert("Changed")
                    this.setState({
                        productId:undefined,
                        newProductName: undefined,
                        newProductImage: undefined,
                        newProductInfo: undefined,
                        newProductTag:undefined,
                        newProductPrice: undefined
                    })
                }
            })
        }
        this.handleAdd = ()=>{
            API.post(`/addProduct`, this.state, {headers: {Authorization: `Bearer ${this.state.token}`}}).then((res)=>{
                if(res.data.status != "succes"){
                    alert(`Error: ${res.data.error}`)
                    this.setState({
                        productName: undefined,
                        productImage: undefined,
                        productInfo: undefined,
                        productTag:undefined,
                        productPrice: undefined,
                        productId:undefined,
                    })
                }else{
                    alert("Add")
                    this.setState({
                        productName: undefined,
                        productImage: undefined,
                        productInfo: undefined,
                        productTag:undefined,
                        productPrice: undefined,
                        productId:undefined,
                    })
                }
            })
        }
        this.handleDelete = ()=>{
            API.post(`/deleteProduct`, this.state, {headers: {Authorization: `Bearer ${this.state.token}`}}).then((res)=>{
                if(res.data.status != "succes"){
                    alert(`Error: ${res.data.error}`)
                    this.setState({
                        productId:undefined,
                    })
                }else{
                    alert("Deleted")
                    this.setState({
                        productId:undefined,
                    })
                }
            })
        }
    }
    render() { 
        return ( 
            <div className="dashContainer">
                <div className="dashHeader">
                    <h1>Welcome to ASTech dashboard</h1>
                </div>
                <div className="dashMain">
                    <div className="optionsCards">
                        <div className="optionCard">
                            <h1>Change product name</h1>
                            <form>
                                <p>New product name:</p>
                                <input type="text" id="newProductName" onChange={this.onChange}/>
                                <p>Product Id:</p>
                                <input type="text" id="productId" onChange={this.onChange}/>
                                <input type="button" value="Change" onClick={(e)=>{this.handleSubmit('name')}}/>
                            </form>
                        </div>
                        <div className="optionCard">
                            <h1>Change product tag</h1>
                            <form>
                                <p>New product tag:</p>
                                <input type="text" id="newProductTag" onChange={this.onChange}/>
                                <p>Product Id:</p>
                                <input type="text" id="productId" onChange={this.onChange}/>
                                <input type="button" value="Change" onClick={(e)=>{this.handleSubmit('tag')}}/>
                            </form>
                        </div>
                        <div className="optionCard">
                            <h1>Change product price</h1>
                            <form>
                                <p>New product price:</p>
                                <input type="text" id="newProductPrice" onChange={this.onChange}/>
                                <p>Product Id:</p>
                                <input type="text" id="productId" onChange={this.onChange}/>
                                <input type="button" value="Change" onClick={(e)=>{this.handleSubmit('price')}}/>
                            </form>
                        </div>
                        <div className="optionCard">
                            <h1>Change product image</h1>
                            <form>
                                <p>New product image:</p>
                                <input type="text" id="newProductImage" onChange={this.onChange}/>
                                <p>Product Id:</p>
                                <input type="text" id="productId" onChange={this.onChange}/>
                                <input type="button" value="Change" onClick={(e)=>{this.handleSubmit('image')}}/>
                            </form>
                        </div>
                        <div className="optionCard">
                            <h1>Change product info</h1>
                            <form>
                                <p>New product info:</p>
                                <textarea id="newProductInfo" onChange={this.onChange}/>
                                <p>Product Id:</p>
                                <input type="text" id="productId" onChange={this.onChange}/>
                                <input type="button" value="Change" onClick={(e)=>{this.handleSubmit('info')}}/>
                            </form>
                        </div>
                        <div className="optionCard">
                            <h1>Add new product</h1>
                            <form>
                                <p>New product name:</p>
                                <input type="text" id="productName" onChange={this.onChange}/>
                                <p>New product tag:</p>
                                <input type="text" id="productTag" onChange={this.onChange}/>
                                <p>New product price:</p>
                                <input type="text" id="productPrice" onChange={this.onChange}/>
                                <p>New product image:</p>
                                <input type="text" id="productImage" onChange={this.onChange}/>
                                <p>New product info:</p>
                                <textarea id="productInfo" onChange={this.onChange}/>
                                <p>Product Id:</p>
                                <input type="text" id="productId" onChange={this.onChange}/>
                                <input type="button" value="Add"  onClick={this.handleAdd}/>
                            </form>
                        </div>
                        <div className="optionCard">
                            <h1>Delete product</h1>
                            <form>
                                <p>product Id:</p>
                                <input type="text" id="productId" onChange={this.onChange}/>
                                <input type="button" value="Delete"  onClick={this.handleDelete}/>
                            </form>
                        </div>
                        <div className="optionCard">
                            <h1>Contact Support</h1>
                            <a href="/contact">Click Here</a>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}