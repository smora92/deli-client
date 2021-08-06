import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Rating from '../../components/Rating/Rating';
import "./RestaurantsList.css"

class RestaurantsList extends Component {
    static defaultProps = {
        restaurants: [],

    }
    render() {
        const { restaurants } = this.props;
        console.log(restaurants)
        return (
            <>
                <h2>Restaurants</h2>
                <ul>
                    {restaurants && restaurants.map(restaurant => (
                        <li key={restaurant.id}>
                            <Link to={`/restaurant/${restaurant.id}/${restaurant.restaurant_name}/${restaurant.delivery_fee}`}>
                                <div className="restaurant">
                                    <div className="title-img">
                                        <img src={restaurant.image} alt="restaurant-dish" className="img" />
                                    </div>
                                    <div className="text-action">
                                        <h2 className="res-name">{restaurant.restaurant_name}</h2>
                                        <Rating value={this.props.rating} />
                                        <span className="res-rating">{restaurant.rating}</span>
                                        <p className="res-desc">{restaurant.description.substring(0, 70)}</p>
                                        <p className="res-delivery">${restaurant.delivery_fee} fee</p>

                                    </div>
                                </div>
                            </Link>
                        </li>))
                    }
                </ul>
            </>
        )
    }
}

export default RestaurantsList
