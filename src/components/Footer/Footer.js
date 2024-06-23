import React from 'react';

function Footer() {
    return (
        <footer className='footer'>
            <nav className='footer__nav'>
                <ul className='footer__row-list'>
                    <li className='footer__row-list-item'>
                        <p className='footer__title'>Продукция</p>
                        <ul className='footer__column-list'>
                            <li className='footer__column-list-item'>
                                <a
                                    className='footer__link'
                                    href='/'
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                    Насосы для перекачки воды
                                 </a>
                            </li>
                            <li className='footer__column-list-item'>
                                <a
                                    className='footer__link'
                                    href='/'
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                    Насосы герметичные
                                 </a>
                            </li>
                        </ul>
                    </li>
                    <li className='footer__row-list-item'>
                        <p className='footer__title'>О нас</p>
                        <ul className='footer__column-list'>
                            <li className='footer__column-list-item'>
                                <a
                                    className='footer__link'
                                    href='/'
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                    О компании
                                 </a>
                            </li>
                            <li className='footer__column-list-item'>
                                <a
                                    className='footer__link'
                                    href='/'
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                    Наши возможности
                                 </a>
                            </li>
                            <li className='footer__column-list-item'>
                                <a
                                    className='footer__link'
                                    href='/'
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                    Наши партнеры
                                 </a>
                            </li>
                        </ul>
                    </li>
                    <li className='footer__row-list-item'>
                        <p className='footer__title'>Полезные ссылки</p>
                        <ul className='footer__column-list'>
                            <li className='footer__column-list-item'>
                                <a
                                    className='footer__link'
                                    href='/'
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                    Политика конфиденциальности
                                 </a>
                            </li>
                            <li className='footer__column-list-item'>
                                <a
                                    className='footer__link'
                                    href='/'
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                    Согласие на обработку персональных данных
                                 </a>
                            </li>
                            <li className='footer__column-list-item'>
                                <a
                                    className='footer__link'
                                    href='/'
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                    Пользовательское соглашение
                                 </a>
                            </li>
                            <li className='footer__column-list-item'>
                                <a
                                    className='footer__link'
                                    href='/'
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                    Политика сбора куки
                                 </a>
                            </li>
                        </ul>
                    </li>
                    <li className='footer__row-list-item'>
                        <p className='footer__title'>Контакты</p>
                        <ul className='footer__column-list'>
                            <li className='footer__column-list-item'>
                                <p className='footer__text'>119331, Москва</p>
                            </li>
                            <li className='footer__column-list-item'>
                                <p className='footer__text'>Проспект Вернадского, 29</p>
                            </li>
                            <li className='footer__column-list-item'>
                                <p className='footer__text'>info@dkmsys.ru</p>
                            </li>
                            <li className='footer__column-list-item'>
                                <p className='footer__text'>+74991380879</p>
                            </li>
                            <li className='footer__column-list-item'>
                                <p className='footer__text'>ИНН 7736332142 КПП 773601001</p>
                            </li>
                            
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className='footer__sub'>
                <p className='footer__title'>ДКМ Системы</p>
                <p className='footer__text'>v.0.1.0</p>
                <p className='footer__text'>Copyright &copy; 2023-2024.</p>
            </div>
        </footer>
    );
}

export default Footer;
