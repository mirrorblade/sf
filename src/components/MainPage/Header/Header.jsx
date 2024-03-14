import burgerIcon from '../../../img/default/Group 4.png';

import './Header.css';

const Header = ({ toggle, setToggle }) => {
    const burgerMenu = () => {
        setToggle(() => !toggle);
    }

    return (
        <header className="header">
            <div className="container">
                <div className="nav">
                    <a href="/" className="logo">Безопасное детство</a>
                    <ul className={`nav_list ${toggle && 'open'}`}>
                        <li className="link_item">
                            <a href="/" className="nav_link">Главная</a>
                        </li>
                        <li className="link_item">
                            <a href="/about/" className="nav_link">О проекте</a>
                        </li>
                        <li className="link_item">
                            <a href="https://sh3tut.edu.yar.ru/" className="nav_link">МОУ СШ №3</a>
                        </li>
                        <li className="link_item">
                            <a href="https://admtmr.ru/" className="nav_link">Администрация ТМР</a>
                        </li>
                    </ul>
                    <div className="burger_icon" onClick={() => burgerMenu()}>
                        <img className="kid_img" src={burgerIcon} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header