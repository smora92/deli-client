import React, { Component } from 'react'
import Menu from '../../Menu/Menu'
import { withRouter } from 'react-router-dom'
import './Restaurant.css'


class Restaurant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [],
            basket: false,
            itemCount: 0

        }
    }
    goToBasket = () => {
        this.setState({
            basket: true
        })
        const { id, name, fee } = this.props.match.params
        this.props.history.push(`/basket/${id}/${name}/${fee}`)
    }

    handleItemAdd = (e) => {
        console.log("item count", e);
        let count = 0;
        if (e) {
            e.map(m => {
                console.log(m);
                count = count + m.ordered;
            })
        }
        console.log('count', count);
        this.setState({ itemCount: count });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { restaurant_name, description, rating, delivery_fee } = e.target;
        const restaurant = {
            restaurant_name: restaurant_name.value,
            description: description.value,
            rating: rating.value,
            delivery_fee: delivery_fee.value,

        };
    }
    async componentDidMount() {
        console.log(process.env.REACT_APP_API_BASE_URL, 'API_BASE_URL')
        const { id } = this.props.match.params
        console.log(this.props.match)
        const menuEndpoint = `http://localhost:3000/api/restaurants/${id}/menu`
        console.log(menuEndpoint, 'kgllgk')
        try {
            const response = await fetch(menuEndpoint);
            const data = await response.json();


            console.log(data, 'data')


            this.setState({
                menu: data
            })
            // )
        } catch (err) {
            console.log(err);
        }
    }


    render() {
        console.log('render')
        const { id, name, fee } = this.props.match.params

        return (
            <>
                <h3>{name}</h3>

                <Menu menu={this.state.menu}
                    onItemAdded={this.handleItemAdd} fee={fee} />
                <div className="proceed">

                    <button className="btn" onClick={this.goToBasket}> Basket X {this.state.itemCount} </button>
                </div>

            </>

        )
    }
}

export default withRouter(Restaurant)