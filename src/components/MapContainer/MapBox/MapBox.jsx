import greenMarker from '../../../img/markerIcons/img/m_green.svg';
import yellowMarker from '../../../img/markerIcons/img/m_yellow.svg';
import redMarker from '../../../img/markerIcons/img/m_red.svg';

import './MapBox.css';

const MapBox = () => {
    return (
        <div className="map_box">
            <div className="map_manual">
                <p>
                    Для чтения информации о детской площадке или спортивном сооружении в городе, выберите
                    маркер с примерным расположением или воспользуйтесь строкой поиска
                </p>
                <ul className="map_points">
                    <li>
                        <img src={greenMarker} />
                        Безопасный объект
                    </li>
                    <li>
                        <img src={yellowMarker} />
                        На рассмотрении
                    </li>
                    <li>
                        <img src={redMarker} />
                        Выявлены проблемы
                    </li>
                </ul>
                <p>
                    При выборе площадки и необходимости заполенния формы с целью сообщения о проблеме, повреждении, отсутствии элементов в конструкции Вы можете заполнить поле "Краткое описание" или "Подробное описание", а также прикрепить фотоизображения выявленной проблемы
                </p>
            </div>
        </div>
    )
}

export default MapBox