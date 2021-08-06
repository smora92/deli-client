import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList'
import Header from '../../Header'
import './Restaurants.css';


class Restaurants extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: [],
            error: null,

        }

    }

    async componentDidMount() {
        console.log(process.env.REACT_APP_API_BASE_URL, 'API_BASE_URL')
        const restaurantsEndpoint = "http://localhost:3000/api/restaurants"
        try {
            const response = await fetch(restaurantsEndpoint);
            const data = await response.text();

            // .then(data =>
            console.log(data)
            // const restaurants = Object.keys(data)
            //     .map(key => data[key].item[0]);

            this.setState({
                restaurants: JSON.parse(data)
            })
            // )
        } catch (err) {
            console.log(err);
        }
    }

    // filterRestaurants(e) {
    //     console.log(e.target.value, "this");
    //     const searchTerm = e.target.value;
    //     console.log(this.state.restaurants)
    //     const targetRestaurant = this.state.restaurants.filter(restaurant =>
    //         restaurant.name.includes(searchTerm))

    //     this.setState({
    //         restaurants: targetRestaurant

    //     })
    // }


    render() {

        return (
            <div>
                <Link to="/">
                    <Header />
                </Link>

                <input className="inp-search" placeholder="search restaurants"
                    onChange={(e) => this.filterRestaurants(e)} />

                <RestaurantsList restaurants={this.state.restaurants} />

            </div>
        )
    }
}

export default Restaurants;
