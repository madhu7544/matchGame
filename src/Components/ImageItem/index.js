import './index.css'

const ImageItem = props => {
  const {imgDetails, selectThumbnail} = props
  const {id, thumbnailUrl} = imgDetails

  const onUpdateImg = () => {
    selectThumbnail(id)
  }
  return (
    <li className="thumbnail-container">
      <button type="button" className="btn-style" onClick={onUpdateImg}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ImageItem
