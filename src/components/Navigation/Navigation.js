import React from 'react';


function Navigation() {
    

    return (
        <nav className='nav'>
                <ul className='nav__list'>
                    <li className='nav__list-item'>
                        <a
                            className='nav__link'
                            href='/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Главная
                        </a>
                    </li>
                    <li className='nav__list-item'>
                        <a
                            className='nav__link'
                            href='/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            О компании
                        </a>
                    </li>
                    <li className='nav__list-item'>
                        <a
                            className='nav__link'
                            href='/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Продукция
                        </a>
                    </li>
                    <li className='nav__list-item'>
                        <a
                            className='nav__link'
                            href='/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Возможности
                        </a>
                    </li>
                    <li className='nav__list-item'>
                        <a
                            className='nav__link'
                            href='/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Партнеры
                        </a>
                    </li>
                    <li className='nav__list-item'>
                        <a
                            className='nav__link'
                            href='/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Контакты
                        </a>
                    </li>
                </ul>
        </nav>
    );
}

export default Navigation;
