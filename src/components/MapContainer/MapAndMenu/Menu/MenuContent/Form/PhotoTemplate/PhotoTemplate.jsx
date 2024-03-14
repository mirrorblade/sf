const PhotoTemplate = ({name, type, func}) => {
    return (
        <div className="photo_container">
            <div className="photo_name" data-type={type}>{name}</div>
            <div className="close_photo" onClick={e => func(e)}>Х</div>
        </div>
    )
}

export default PhotoTemplate