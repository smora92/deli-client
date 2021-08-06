import React, { Component } from 'react';
import './Home.css';
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
            <div className="home-container"  >

                <nav className='navbar'>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo'>
                            <h1>DELI delivery</h1>
                        </Link>
                        <ul>
                            <li className='nav-item'>
                                <Link to='/Restaurants' className='nav-links' >
                                    <h2>Restaurants</h2>
                                </Link>
                            </li>


                            <li className='nav-item'>
                                <Link to='/demo' className='nav-links-mobile' >
                                    <h2>Demo</h2>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </nav>

                <div>
                    <h3>Welcome to DELI delivery</h3>
                </div>
            </div>
        )
    }
}

export default Home

