const PhotoCurrent = ({ url }) => {
    return (
        <div className="photoCurrent">
            <img src={url} alt="Photo selected" />
        </div>
    );
}

export default PhotoCurrent;
