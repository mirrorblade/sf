import { useState } from 'react';
import ContentContainer from './ContentContainer/ContentContainer';
import Header from './Header/Header';
import './MainPage.css';

const MainPage = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='main_page'>
            <Header toggle={toggle} setToggle={setToggle}/>
            <ContentContainer toggle={toggle} />
        </div>
    )
}

export default MainPage