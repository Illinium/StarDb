import React from 'react';
import './header.css';

const Header = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><h1>StarDB</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="btn btn-link" href="#">People <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-link" href="#">Planets</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-link" href="#">Starships</a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
};

export default Header;