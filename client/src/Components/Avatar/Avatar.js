import React, {useState} from 'react';
import * as style from '@dicebear/big-smile';
import left from '../../Assets/left-arrow.png'
import right from '../../Assets/right-arrow.png'
import '../../Styling/Avatar.css'

function Avatar() {
   
   const [mouth, setMouth] = useState(0) //8 mouths
   const [eyes, setEyes] = useState(0) //8 eyes
   const [hair, setHair] = useState(0) //13 hair
   const [accessories, setAccessories] = useState(0) //8 accessories
   const [skinColor, setSkinColor] = useState(0) //8 skin color
   const [hairColor, setHairColor] = useState(0)//8 hair color

   const URL = `https://avatars.dicebear.com/api/big-smile/:seed.svg?mouth[]=${style.schema.properties.mouth.default[mouth]}&eyes[]=${style.schema.properties.eyes.default[eyes]}&hair[]=${style.schema.properties.hair.default[hair]}&accessories[]=${style.schema.properties.accessories.default[accessories]}&skinColor[]=${style.schema.properties.skinColor.default[skinColor]}&hairColor[]=${style.schema.properties.hairColor.default[hairColor]}`;

   function handleClick(e){
      
      //Updates the new id and mods by 13 or 8 depending on name of attribute
      let newValue=parseInt(e.target.id);
      if (e.target.name === "hair"){
         // Goes to the left of the list when left button is clicked
         if (e.target.alt === "left"){
            newValue = (parseInt(e.target.id) - 1) % 13
         } else{
            newValue = (parseInt(e.target.id) + 1) % 13
         }
      } else {
         // Goes to the left of the list when left button is clicked
         if (e.target.alt === "left"){
            newValue = (parseInt(e.target.id) - 1) % 8
         } else{
            newValue = (parseInt(e.target.id) + 1) % 8
         }
      }

      //Updates the states of the attribute according to the name
      switch(e.target.name){
         case "hair":
            setHair(newValue)
            break;
         case "eyes":
            setEyes(newValue)
            break;
         case "mouth":
            setMouth(newValue)
            break;
         case "hairColor":
            setHairColor(newValue)
            break;
         case "skinColor":
            setSkinColor(newValue)
            break;
         case "accessory":
            setAccessories(newValue)
            break;
         default:
            break;
      }
   }
   
    return (
       <div className="avatar-edit-container">
         <img className="avatar-edit" src={URL} alt="avatar"></img>
         <div>
            <img className="left-arrow" onClick={handleClick} name="hair" id={hair} src={left} alt="left"></img>
            <p className="detail">Hair</p>
            <img className="right-arrow" onClick={handleClick} name="hair" id={hair} src={right} alt="right"></img>
         </div>
         <div>
            <img className="left-arrow" onClick={handleClick} name="eyes" id={eyes} src={left} alt="left"></img>
            <p className='detail'>Eyes</p>
            <img className="right-arrow" onClick={handleClick} name="eyes" id={eyes} src={right} alt="right"></img>
         </div>
         <div>
            <img className="left-arrow" onClick={handleClick} name="mouth" id={mouth} src={left} alt="left"></img>
            <p className='detail'>Mouth</p>
            <img className="right-arrow" onClick={handleClick} name="mouth" id={mouth} src={right} alt="right"></img>
         </div>
         <div>
            <img className="left-arrow" onClick={handleClick} name="hairColor" id={hairColor} src={left} alt="left"></img>
            <p className='detail'>Hair Color</p>
            <img className="right-arrow" onClick={handleClick} name="hairColor" id={hairColor} src={right} alt="right"></img>
         </div>
         <div>
            <img className="left-arrow" onClick={handleClick} name="skinColor"id={skinColor} src={left} alt="left"></img>
            <p className='detail'>Skin Color</p>
            <img className="right-arrow" onClick={handleClick} name="skinColor" id={skinColor} src={right} alt="right"></img>
         </div>
         <div>
            <img className="left-arrow" onClick={handleClick} name="accessory" id={accessories} src={left} alt="left"></img>
            <p className='detail'>Accessory</p>
            <img className="right-arrow" onClick={handleClick} name="accessory" id={accessories} src={right} alt="right"></img>
         </div>
       </div>
    );
}

export default Avatar;
