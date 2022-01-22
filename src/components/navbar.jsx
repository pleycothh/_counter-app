import React, { Component } from 'react';


//stateless functional component
const NavBar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://www.google.com">
                    Navbar{" "} 
                    <span className='badge bg-pill bg-secondary'>
                        {totalCounters} 
                        </span>
                    </a>
                </div>
            </nav>
        
     );
}
 
export default NavBar;
/*
class NavBar extends Component {
    render() { 
        return (
        );
    }
}
 
export default NavBar;
*/