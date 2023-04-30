import React, {Component} from 'react';

class Header extends Component {

    render() {
        return (
            <div className='header'>
                <header>Property Information Website</header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/property">Property Listings</a></li>
                        <li><a href="/about">About</a></li>

                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;
