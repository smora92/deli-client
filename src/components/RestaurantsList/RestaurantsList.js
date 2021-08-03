import React, { Component } from 'react';
import RestaurantsContext from '../../RestaurantsContext'
import { Link } from 'react-router-dom'
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
                    {restaurants.map(restaurant => (
                        <li key={restaurant.id}>
                            <Link to={`/restaurant/${restaurant.id}/${restaurant.restaurant_name}/${restaurant.delivery_fee}`}>
                                <div className="restaurant">
                                    <div className="title-img">
                                        <img src={restaurant.image} alt="food picture" className="img" />
                                    </div>
                                    <div className="text-action">
                                        <h2 className="res-name">{restaurant.restaurant_name}</h2>
                                        <span className="res-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                        <p className="res-desc">{restaurant.description.substring(0, 70)}</p>
                                        <p className="res-delivery">${restaurant.delivery_fee} delivery fee</p>

                                        {/* <span className="rating">{restaurant.rating}</span> */}
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
