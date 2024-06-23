import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

function Header(props) {
    // const location = useLocation().pathname;
    // const headerClassName = `header ${location === '/' ? 'header_main' : ''}`;
    const headerClassName = `header`;
    return (
        <header className='header'>
            <div className='header__container'>
                 <SearchForm />
                <div className='header__link-container'>
                    <Link className='header__link' to='/signin'>
                        Войти
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
