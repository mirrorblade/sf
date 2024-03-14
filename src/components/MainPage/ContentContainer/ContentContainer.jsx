import mainPic from '../../../img/default/main_pic.svg';

import './ContentContainer.css';

const ContentContainer = ({ toggle }) => {
    return (
        <div className={`content_container ${toggle && 'close'}`}>
            <div className="content">
                <h1>БЕЗОПАСНОЕ ДЕТСТВО</h1>
                <div className="header_about">
                    <p>
                        Портал разработан коллективом педагогов и учеников МОУ СШ №3 в рамках социального проекта “Мое
                        безопасное детство” с целью выявления объектов, сооружений и конструкций, требующих ремонта, и
                        передачи информации о неисправностях ответственному органу или учреждению для устранения
                        проблемы
                    </p>
                </div>
            </div>
            <div className="image_container">
                <img className="header_img" src={mainPic} />
            </div>
        </div>
    )
}

export default ContentContainer