import React from 'react'
import Style from './Style.jsx'
// const imageThumbnail = require('image-thumbnail')

const StyleSelector = (props) => {
  // const [selected, setSelected] = useState(props.styles.name)
  // const [photoStyle, setPhotoStyle] = useState('selected-state')

  // const handleChange = (name) {
  //   setSelected(name)
  // }

  // useEffect(() => {
  //   if()
  // })

  const styles = props.styles

  return (
  <div className="style-images">
    {styles?.map(style => {
      const className = style.name === props.selectedStyle ? 'clicked-style' : 'not-clicked-style'
      return (
        <Style key={style.style_id} id={style.style_id}
        name={style.name} originalPrice={style.original_price}
        salePrice={style.sale_price} default={style.default}
        photos={style.photos} skus={style.skus}
        changeStyle={props.changeStyle} selected={className}/>
      )
      })
    }
  </div>
  )
}







export default StyleSelector;

