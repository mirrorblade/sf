import CloseButton from './Buttons/CloseButton/CloseButton';
import TouchButton from './Buttons/TouchButton/TouchButton';
import Form from './Form/Form';

import './MenuContent.css';

const MenuContent = () => {
    return (
        <div className="menuContent">
            <TouchButton />
            <CloseButton />
            <Form />
        </div>
    )
}

export default MenuContent