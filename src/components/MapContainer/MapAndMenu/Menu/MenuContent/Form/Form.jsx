import { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";

import { adapter } from "../../../../../../App";
import PhotoTemplate from "./PhotoTemplate/PhotoTemplate";

import './Form.css';

const Form = ({ selectedMarker, selectedMarkerAgain, isVisibleMarker }) => {
    const [photosArray, setPhotosArray] = useState([]); //В этом объекте будут храниться все фотографии. Дальше вы поймёте, зачем это надо было делать
    const [clearFiles, setClearFiles] = useState(false);
    const photosForm = useRef();
    const form = useRef()

        if (!selectedMarkerAgain && selectedMarker && isVisibleMarker && clearFiles) {
            form.current.reset();
            if (photosArray.length) setPhotosArray([])
        };


    const submitData = event => {
        event.preventDefault();

        if (photosArray.length) {
            const validationResult = validation(photosArray);
            if (!validationResult) {    //Если фотографии проходят валидацию, тогда функция вернёт true, иначе undefined
                return;
            }
        };

        const animationList = [form.current['description'], form.current['short_description']];

        if (!animationList[0].value && !animationList[1].value) {   //Если не заполнено ни одно из полей, тогда выполняется код
            animationList.forEach(e => e.classList.add('animation'));
            setTimeout(() => animationList.forEach(e => e.classList.remove('animation')), 3000);    //Задержка стоит для того, чтобы анимация, которая длится 3 секунды, выполнилась полностью

            alert('Необходимо заполнить хотя-бы одно поле');
            return;
        }

        const formData = new FormData(form.current);

        adapter
            .post('http://127.0.0.1:7000/api/petitions/', formData)
    }

    const uploadPhotos = event => {
        console.log(event)
        const photos = event.target

        if (photos.files.length > 10) {     //Проверка на количество файлов, оно не должно превышать 10
            photos.files = (new DataTransfer() || new ClipboardEvent('').clipboardData).files;      //Сброс всех файлов. Длина FileList'a равна 0
            alert('Количество файлов не должно превышать 10.');
            return;
        };

        let photosList = [];

        Object.values(photos.files).forEach(file => {
            for (const photo of photosArray) {    //Проверка на наличие файла на сайте с точно таким же названием, как и у добавляемого
                if (photo.name === file.name) {     //Если такой файл нашёлся, тогда он не добавляется на сайт  
                    return
                }
            };

            photosList.push({
                name: file.name,
                type: file.type,
                file: file,
                size: file.size
            })
        });

        setPhotosArray([...photosArray, ...photosList])
    }

    const validation = photos => {   //Валидация фото
        for (const photo of photos) {
            if (photo.size > 5 * 1024 * 1024) {     //Проверка на размер файлов. Он не должен превышать 5 мб
                alert('Объём одного файла не должен превышать 5 мб.')
                return;
            };
            if (!['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(photo.type)) {  //Дополнительная проверка на тип файла
                alert('Один из файлов имеет недопустимое расширение. Допустимые расширения: jpeg, jpg, png, gif.')
                return;
            };
        };
        return true;
    }

    const closePhoto = event => { //При нажатии на крестик рядом с именем файла, этот файл убирается из списка

        //Следующий фрагмент кода был написан из-за того, что просто изменить (удалить) файлы из FileList'а нельзя, поэтому необходимо использовать костыли и создать свой FileList, который будет заменять изначальный      

        const nameOfRemovedFile = event.target.previousSibling.innerText;    //Имя файла, который будет удалён из списка

        const fileList = new DataTransfer() || new ClipboardEvent('').clipboardData;  //Создание нового FileList, в котором будут хранится новые файлы

        setPhotosArray(photosArray.filter(photo => {
            if (photo.name !== nameOfRemovedFile) {
                fileList.items.add(new File([photo.file], photo.name, {type: photo.type}))

                return true
            }
        }));
        photosForm.files = fileList.files;  //Вместо изначальных файлов, вставляются новый FileList без удалённых из списка файлов
    }

    console.log(photosArray)

    return (
        <form
            action="http://127.0.0.1:7000/api/petitions/"
            method="POST"
            id="form"
            autoComplete="off"
            ref={form}
        >
            <h1>Название формы</h1>
            <div className="table">
                <div className="table_row">
                    <span></span>
                    <input
                        type="hidden"
                        name="coordinates"
                        maxLength="32"
                        required
                        id="id_coordinates"
                        defaultValue={selectedMarker?.coodinates}
                    />
                </div>
                <div className="table_row">
                    <span>Краткое описание</span>
                    <input
                        type="text"
                        name="short_description"
                        maxLength="32"
                        required
                        id="id_short_description"
                    />
                </div>
                <div className="table_row">
                    <span>Описание</span>
                    <textarea
                        name="description"
                        cols="40"
                        rows="10"
                        required
                        id="id_description"
                    ></textarea>
                </div>
                <div className="table_row">
                    <label htmlFor="id_photo">Выбрать файл</label>
                    <input
                        type="file"
                        name="photos"
                        accept="image/*"
                        id="id_photo"
                        multiple
                        ref={photosForm}
                        onChange={e => uploadPhotos(e)}
                    />
                    {photosArray[0] && photosArray.map(photo =>
                        <PhotoTemplate
                            name={photo.name}
                            type={photo.type}
                            func={closePhoto}
                            key={nanoid()}
                        />
                    )}
                </div>
            </div>
            <button type="submit" onClick={submitData}>Отправить</button>
        </form>
    )
}

const mapState = (state) => {
    return {
        selectedMarker: state.selectedMarker,
        selectedMarkerAgain: state.selectedMarkerAgain,
        isVisibleMarker: state.isVisibleMarker
    }
}

export default connect(mapState, null)(Form)