import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'
import { ROUTES, HEADER_POSITION_LEFT, HEADER_POSITION_RIGHT } from '../../config/constants';



const isAuthenticated = () => {
    // add login logic
    return true;
}


const NavbarComponent = () => {

    const [leftRoutes, setLeftRoutes] = useState<any[]>([]);
    const [rightRoutes, setRightRoutes] = useState<any[]>([]);

    useEffect(() => {
        setLeftRoutes( ROUTES.filter(route => route.headerPosition == HEADER_POSITION_LEFT && route.needAuthentication == isAuthenticated()) );
        setRightRoutes( ROUTES.filter(route => route.headerPosition == HEADER_POSITION_RIGHT && route.needAuthentication == isAuthenticated()) );
    }, []);


    return (
        <>
            <nav className='navbar'>

                <div className="navbar-leftmenu">
                    <ul className="navbar-nav">
                        {
                            leftRoutes.map( route => (
                                <li className="nav-item" key={route.key}>
                                    <NavLink to={ route.to } className="nav-link">{ route.name }</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="navbar-rightmenu">
                    <ul className="navbar-nav">
                        {
                            rightRoutes.map( route => (
                                <li className="nav-item" key={route.key}>
                                    <NavLink to={ route.to } className="nav-link">{ route.name }</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </nav>
        </>
    )
}

export { NavbarComponent };
