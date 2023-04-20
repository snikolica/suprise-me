import React, {useState} from "react";
import people from './data';
import {FaChevronLeft,FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name,image,job,text} = people[index];

const checkNumber = (number) => {
if (number > people.length - 1) {
    return 0
}
if (number < 0) {
    return people.length - 1 
}
return number;
}

const nextPerson = () => {
    setIndex((index)=> {
let newIndex = index + 1;
return checkNumber(newIndex);
    })
}
const prevPerson = () => {
    setIndex((index)=> {
let newIndex = index - 1;
return checkNumber(newIndex);
    })
}
const randomNumber = () => {
    let random = Math.floor (Math.random() * people.length);
    if (random === index) {
        random = index + 1;
    }
    
    setIndex(checkNumber(random))
      };
    return ( 
<article className="review">
    <div className="image-container">
      <img src={image} alt={name} className='person-img'/>
      <div className="before"></div>
      <span className="quote-icon">
       <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="text">{text}</p>
    <div className="button-container">
        <button className="btn-prev" onClick={prevPerson}><FaChevronLeft /></button>
        <button className="btn-next" onClick={nextPerson}><FaChevronRight /></button>
    </div>
    <button className="btn-random" onClick={randomNumber}>suprise me</button>

</article>
     );
}
 
export default Review;