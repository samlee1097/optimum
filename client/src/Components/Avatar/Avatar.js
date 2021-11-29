import React, {useState} from 'react';
import * as style from '@dicebear/big-smile';
import left from '../../Assets/left-arrow.png'
import right from '../../Assets/right-arrow.png'
import '../../Styling/Avatar.css'

function Avatar() {

   //8 mouth
   const [mouth, setMouth] = useState(style.schema.properties.mouth.default[0])
   //8 eyes
   const [eyes, setEyes] = useState(style.schema.properties.eyes.default[0])
   //13 hair
   const [hair, setHair] = useState(style.schema.properties.hair.default[0])
   //8 accessories
   const [accessories, setAccessories] = useState(style.schema.properties.accessories.default[0])
   //8 skin color
   const [skinColor, setSkinColor] = useState(style.schema.properties.skinColor.default[0])
   //8 hair color
   const [hairColor, setHairColor] = useState(style.schema.properties.hairColor.default[0])

   const URL = `https://avatars.dicebear.com/api/big-smile/:seed.svg?mouth[]=${mouth}&eyes[]=${eyes}&hair[]=${hair}&accessories[]=${accessories}&skinColor[]=${skinColor}&hairColor[]=${hairColor}`;
   
    return (
       <div className="avatar-edit-container">
         <img className="avatar-edit" src= {URL}></img>
         <div>
            <img className="left-arrow" src={left}></img>
            <p className="detail">Hair</p>
            <img className="right-arrow" src={right}></img>
         </div>
         <div>
            <img className="left-arrow" src={left}></img>
            <p className='detail'>Eyes</p>
            <img className="right-arrow" src={right}></img>
         </div>
         <div>
            <img className="left-arrow" src={left}></img>
            <p className='detail'>Mouth</p>
            <img className="right-arrow" src={right}></img>
         </div>
         <div>
            <img className="left-arrow" src={left}></img>
            <p className='detail'>Hair Color</p>
            <img className="right-arrow" src={right}></img>
         </div>
         <div>
            <img className="left-arrow" src={left}></img>
            <p className='detail'>Skin Color</p>
            <img className="right-arrow" src={right}></img>
         </div>
         <div>
            <img className="left-arrow" src={left}></img>
            <p className='detail'>Accessory</p>
            <img className="right-arrow" src={right}></img>
         </div>
       </div>
    );
}

export default Avatar;
