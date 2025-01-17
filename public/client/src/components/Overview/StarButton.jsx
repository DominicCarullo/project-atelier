import React from 'react'
import {useState, useEffect} from 'react';
import outlineStar from '../../../../../assets/images/star-outline.png'
import fullStar from '../../../../../assets/images/full-gold-star.png';


const StarButton = (props) => {
  const [fillStar, setFillStar] = useState(false)
  const [imgSrc, setImgSrc] = useState('empty')

  useEffect(()=> {
    if(fillStar) {
      setImgSrc(fullStar)
    }  else {
      setImgSrc(outlineStar)
    }
  })

  const handleClick = () => {
    setFillStar(prev => !prev)
  }
 return  (
   <div className="star-button ">
     <img src={imgSrc} onClick={handleClick}></img>
   </div>
 )
}

export default StarButton;