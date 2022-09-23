import React , {useState} from 'react';
import people from './data'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0);
  const {id,name, surname, img} = people[index];



  const nextPerson = () => {
    
    setIndex((index)=> {
      let newIndex = index +1;
      if(newIndex > people.length - 1) {
        newIndex = 0;
      }
      return newIndex
    }

    )
  }

  const prevPerson = () => {
    setIndex((index)=> {
    console.log(index)
      let newIndex = index -1;
      if(newIndex < 0) {
        newIndex = people.length - 1;
      }
      return newIndex
    }

    )

    
    

  }

  const randomPerson = ()=> {
    let randomNumber = Math.floor(Math.random() * people.length);
    console.log(randomNumber)

    setIndex((index)=> {
      let newIndex = randomNumber;
      return newIndex
    }

    )

    return randomNumber
 
  }


  return (
    <article className='review'>
      <div className='img-container'>
        <h3>{id}</h3>
        
            <img className='person-img' src={img} alt='imag'/>
           

      </div>
          <h4 className='author'>{name}</h4>
          <p>{surname}</p>
          
         <div className='button-container'>
          <button className='btn-left'onClick={prevPerson} >
            <FaChevronLeft/>
          </button>
          <button className='btn-right' onClick={nextPerson}>
          <FaChevronRight/>
          </button>
       
         </div>
         <button className='btn-surprise' onClick={randomPerson}>Surprise me</button>

    </article>

  )
};

export default Review
