import React, { Component } from 'react';
import './Home.css';
import image from './Landing.jpg'
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            click: false,
            setClick: false
        }
    }

    render() {
        return (
            <div >
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo'>
                            <h1>DELI delivery</h1>
                        </Link>
                        <ul>
                            <li className='nav-item'>
                                <Link to='/Restaurants' className='nav-links' >
                                    <h3>Restaurants</h3>
                                </Link>
                            </li>


                            {/* <li className='nav-item'>
                                <Link to='/sign-up' className='nav-links-mobile' >
                                    Sign Up
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                </nav>

                <div>
                    <p>Welcome to DELI delivery</p>
                </div>
            </div>
        )
    }
}

export default Home

