import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import './Checkout.css'
import local from 'local-storage'


class Checkout extends Component {
    constructor() {
        super()
        this.state = {
            purchased: [],

        }
    }



    render() {
        const purchased = local('purchased')
        const paid = local('paid')
        if (!paid) {
            return <h1>purchase items first</h1>
        }
        const updated = purchased ? purchased : []
        if (updated.length !== this.state.purchased.length) {
            this.setState({
                purchased: updated
            })
        }
        const subtotals = this.state.purchased.map(item => item.price * item.ordered)
        const subtotal = subtotals.reduce((a, b) => { return a + b }, 0)
        const total = subtotal + parseFloat(paid)

        console.log(purchased)
        return (

            <>
                <h2>My Order</h2>
                <div className="Checkout">
                    <div className="cart-items">
                        <ul className="cart-list">
                            {this.state.purchased && (this.state.purchased.map(item => <li key={item.item_id}><div className="item">

                                <div className="title">
                                    {item.item_name}
                                    {' '}
                                    {/*equivalent .join */}
                                    x
                                    {' '}
                                    {item.ordered}
                                </div>
                                <div className="price">${item.price * item.ordered}</div>
                            </div></li>))}
                        </ul>
                    </div>
                    <div className="price-summary">
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span>${subtotal}</span>
                        </div>
                        <div className="delivery-paid">
                            <span>Delivery paid</span>
                            <span>${paid}</span>
                        </div>
                        <hr />
                    </div>
                    <div className="proceed">
                        <div className="total">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>

                    </div>
                </div>

                <button><Link to={'/restaurants'}>new order</Link></button>
            </>
        )
    }
}



export default withRouter(Checkout)


