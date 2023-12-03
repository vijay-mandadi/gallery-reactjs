// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {item, imageChange} = props
  const {id, thumbnailUrl, thumbnailAltText} = item

  const change = () => {
    imageChange(id)
  }

  return (
    <li>
      <button type="button" onClick={change}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
