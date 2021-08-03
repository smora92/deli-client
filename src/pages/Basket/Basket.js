import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './Basket.css'
import local from 'local-storage'
import Restaurant from '../Restaurant/Restaurant';

class Basket extends Component {
    constructor() {
        super()
        this.state = {
            ordered: [],
            // goToCheckout: false,
            backToMenu: false
        }
    }
    goToCheckout = () => {
        // this.setState({
        //     goToCheckout: true //use history?
        // })
        const ordered = local('ordered')
        local('purchased', ordered)
        local('ordered', [])
        const fee = local('fee')
        local('paid', fee)
        local('fee', null)
        this.props.history.push('/checkout')
    }
    backToMenu = () => {
        this.setState({
            backToMenu: true
        })

        this.props.history.goBack();
    }


    render() {
        const { menu } = this.props;
        console.log(this.props);
        const ordered = local('ordered')
        const fee = local('fee')
        if (!fee) {
            return <h1>order items first</h1>
        }
        const updated = ordered ? ordered : []
        if (updated.length !== this.state.ordered.length) {
            this.setState({
                ordered: updated
            })
        }
        const items = this.state.ordered.map(item => {
            return (
                <div>
                    <h2>{item.item_name}</h2>
                    <h3></h3>
                </div>
            )
        })
        const subtotals = this.state.ordered.map(item => item.price * item.ordered)
        const subtotal = subtotals.reduce((a, b) => { return a + b }, 0)
        const total = subtotal + parseFloat(fee)

        return (

            <>
                <h2>My Basket</h2>
                <div className="basket">
                    <div className="cart-items">
                        <ul className="cart-list">
                            {this.state.ordered && (this.state.ordered.map(item => <li key={item.item_id}><div className="item">

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
                        <div className="delivery-fee">
                            <span>Delivery fee</span>
                            <span>${fee}</span>
                        </div>
                        <hr />
                    </div>
                    <div className="proceed">
                        <div className="total">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                        <div className="proceed-btns">
                            <button color="lightgreen" onClick={this.goToCheckout}>Go to Checkout</button>
                            <button className="btn" onClick={this.backToMenu}>Menu</button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default withRouter(Basket);
